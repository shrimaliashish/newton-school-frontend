import React, { useState } from 'react';

const AddReplyForm = ({ postId, commentId, addReply }) => {
    const [reply, setReply] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addReply(postId, commentId, reply);
        setReply('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                placeholder="Add a reply"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
            ></textarea>
            <button type="submit">Add Reply</button>
        </form>
    );
};

export default AddReplyForm;
