import { useState } from "react";
import classes from "../assets/css/modal.module.css";
import axios from 'axios';

const Modal = (props) => {
    const [comment, setComment] = useState('')
    const closeHandler = () => {
        props.onClose();
    };

    const submitHandler = () => {
        props.onReply(comment);
        props.onClose();
    }

    const commentChangeHandler = (event) => {
        setComment(event.target.value)
    }

    return (
        <div className={classes.popupBox}>
            <div className={classes.box}>

                <div className={classes.form}>
                    <div className={classes.inp}>
                        <div>
                            <label htmlFor="studentName" required>
                                Comment
                            </label>
                        </div>
                        <div >
                            <input
                                type="text"
                                value={comment}
                                onChange={commentChangeHandler}
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
    );
};

export default Modal;