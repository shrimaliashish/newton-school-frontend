import React, { useState } from 'react';

const AddCommentForm = ({ postId, addComment }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(postId, comment);
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                placeholder="Add a comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button type="submit">Add Comment</button>
        </form>
    );
};

export default AddCommentForm;
