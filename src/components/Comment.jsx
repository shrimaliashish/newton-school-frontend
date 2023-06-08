import React, { useState } from "react";
import Modal from "../components/modal";
import axios from "axios";
const Comment = ({ comment, postId }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [show, setShow] = useState(false);
  const [replies, setReplies] = useState(null);
  const [isReplyToreply, setIsReplyToReply] = useState(false);
  const [replyId, setReplyId] = useState(null);

  const closeHandler = () => {
    setShow(false);
  };
  const openHandler = () => {
    setShow(true);
  };

  const replyHandler = async (reply) => {
    await axios
      .post(
        `https://newton-school-backend.vercel.app/api/posts/${postId}/comments/${comment._id}/replies`,
        { reply: reply }
      )
      .then((res) => {
        const tempReplies = res.data.comments.find((data) => {
          return data._id === comment._id;
        });
        console.log(tempReplies.replies.reverse());
        setReplies(tempReplies.replies.reverse());
        setShowReplies(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const setRepliesValue = (id) => {
    setShowReplies(!showReplies);
    if (!replies) setReplies(comment.replies.reverse());
  };

  const replyToReplyhandler = async (reply) => {
    await axios
      .post(
        `https://newton-school-backend.vercel.app/api/posts/${postId}/comments/${comment._id}/replies`,
        { reply }
      )
      .then((res) => {
        const tempReplies = res.data.comments.find((data) => {
          return data._id === comment._id;
        });
        setReplies(tempReplies.replies);
        setShowReplies(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const Reply = ({ reply }) => {
    return (
      <div className="singleComment" style={{ marginLeft: 50 }} key={reply._id}>
        <span>
          <p className="comment">{reply.text}</p>
        </span>
        <span>
          <p
            className="reply"
            onClick={() => {
              setReplyId(reply._id);
              setIsReplyToReply(true);
              openHandler();
            }}
          >
            Reply
          </p>
        </span>
      </div>
    );
  };

  return (
    <React.Fragment>
      {show && (
        <Modal
          onClose={closeHandler}
          onReply={isReplyToreply ? replyToReplyhandler : replyHandler}
        />
      )}
      <div className="singleComment" key={comment._id}>
        <span>
          <p className="comment">{comment.text}</p>
        </span>
        <span>
          <p
            className="reply"
            onClick={() => {
              setIsReplyToReply(false);
              openHandler();
            }}
          >
            Reply
          </p>
        </span>
        <span>
          <p
            className="reply"
            onClick={() => {
              setRepliesValue();
            }}
          >
            All replies
          </p>
        </span>
      </div>
      {showReplies &&
        replies &&
        replies.map((reply) => {
          return <Reply key={reply._id} reply={reply} />;
        })}
    </React.Fragment>
  );
};

export default Comment;
