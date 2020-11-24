import React from 'react';

function Post(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}

export default Post;