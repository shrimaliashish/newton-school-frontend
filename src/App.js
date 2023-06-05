import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Post from "./components/Post";
import Header from "./components/Header";
import PostHeader from "./components/PostHeader";
const App = () => {
  const [posts, setPost] = useState(null);
  const fetchPost = async () => {
    try {
      const response = await axios.get(
        "https://newton-school-backend.vercel.app/api/allposts"
      );
      console.log(response.data);
      setPost(response.data.reverse());
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <Header />
      <div className="post_container">
        <PostHeader onAdd={fetchPost} />
        <div className="post_inner_container">
          {posts &&
            posts.map((post) => <Post postData={post} key={post._id} />)}
        </div>
      </div>
    </>
  );
};

export default App;
