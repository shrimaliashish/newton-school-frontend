import React from "react";
import NewPost from "../components/NewPost";
const PostHeader = ({ onAdd }) => {
  return (
    <div className="feed_post">
      <div className="feed_profile">
        {/* {!userload.loading && (
          <img
            src={userload.users.avatar}
            alt="Avatar"
            width="100%"
            height="100%"
            onClick={showProfile}
          />
        )} */}
      </div>
      <div className="Hi_there">
        <h2 className="animate-charcter">WELCOME TO NEWTON SCHOOL</h2>
      </div>
      <div className="feed_ask">
        <NewPost onAdd={onAdd} />
      </div>
    </div>
  );
};

export default PostHeader;
