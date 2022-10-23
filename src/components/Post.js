import React from "react";
import "./Post.css";

const Post = (props) => {
  console.log(props.post);
  return (
    <div className="post">
      <div className="avatar_img">
        <img className="avatar" src={props.post.user.avatar_url} alt="avatar" />
        <span className="created_at">{props.post.created_at.slice(0, 10)}</span>
      </div>

      <p className="content">{props.post.content}</p>
    </div>
  );
};

export default Post;
