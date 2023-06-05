import React, { useState } from "react";
import classes from "../assets/css/modal.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const NewPostModal = (props) => {
  const [title, setTitle] = useState("");
  const closeHandler = () => {
    props.onClose();
  };

  const submitHandler = async () => {
    await axios
      .post(`https://newton-school-backend.vercel.app/api/posts`, {
        title,
        comments: [],
      })
      .then((res) => {
        props.onPost();
        props.onClose();
        toast("Susccesfully posted!!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((e) => {
        console.log(e);
        toast("Something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className={classes.popupBox}>
        <div className={classes.box}>
          <div className={classes.form}>
            <div className={classes.inp}>
              <div>
                <label htmlFor="studentName" required>
                  Title
                </label>
              </div>
              <div>
                <input
                  type="text"
                  value={title}
                  onChange={titleChangeHandler}
                />
              </div>
            </div>
          </div>
          <div className={classes.buttons}>
            <button className={classes.btn1} onClick={submitHandler}>
              Post
            </button>
            <button className={classes.btn2} onClick={closeHandler}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewPostModal;
