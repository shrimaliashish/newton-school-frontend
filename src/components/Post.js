import React, { useState } from "react";
import axios from "axios";
import Modal from "../components/modal";
import Comment from "../components/Comment";
const Post = ({ postData }) => {
  const [showComments, setShowComments] = useState(false);
  const [commetText, setCommentTxt] = useState("");

  const [comments, setComments] = useState(null);

  const setCommentValue = () => {
    setShowComments(!showComments);
    if (!comments) {
      setComments(postData.comments.reverse());
    }
  };

  const postComment = async (id) => {
    await axios
      .post(
        `https://newton-school-backend.vercel.app/api/posts/${id}/comments`,
        {
          comment: commetText,
        }
      )
      .then((res) => {
        // console.log(res.data.comments);
        setComments(res.data.comments.reverse());
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <React.Fragment>
      <div className="post_content">
        <img
          src="https://img.freepik.com/premium-vector/neon-sign-new-post-with-brick-wall-background-vector_118419-4282.jpg"
          alt="Post"
          height="350px"
        />
        <h2>{postData.title}</h2>
        <button style={{ marginLeft: 0 }} onClick={setCommentValue}>
          Comments
        </button>
        {showComments && (
          <div>
            <div className="commentMachine">
              <input
                type="text"
                onChange={(e) => setCommentTxt(e.target.value)}
              />
              <button onClick={() => postComment(postData._id)}>Post</button>
            </div>
            <div className="commentBox">
              {comments &&
                comments.map((comment) => {
                  return (
                    <Comment
                      key={comment._id}
                      postId={postData._id}
                      comment={comment}
                    />
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Post;
