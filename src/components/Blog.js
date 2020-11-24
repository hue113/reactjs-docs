import React from 'react';
import Post from './Post';

function Blog(props) {
    const sidebar = (
        <ul>
          {props.posts.map((post) =>
            <li key={post.id}>
              {post.title}
            </li>
          )}
        </ul>
    );

    const content = props.posts.map((post) =>
        // <div key={post.id}>
        //     <h3>{post.title}</h3>
        //     <p>{post.content}</p>
        // </div>

        // Post component can read props.id, but not props.key
        <Post
          key={post.id}             // cannot use props.key in Post
          id={post.id}              // but can still use props.id in Post to get key
          title={post.title} 
          content={post.content} />
    );

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

export default Blog;