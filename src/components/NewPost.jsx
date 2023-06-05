import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewPostModal from "../components/NewPostModal";
const NewPost = ({ onAdd }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <>
      <ToastContainer />
      <button className="feed_ask_btn" onClick={() => setOpen((open) => !open)}>
        Post Your Moment
      </button>
      {open && <NewPostModal onPost={onAdd} onClose={closeModal} />}
    </>
  );
};

export default NewPost;
