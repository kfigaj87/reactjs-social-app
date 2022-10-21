import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <p>
        <img className="avatar" src={props.post} />
      </p>
    </div>
  );
};

console.log("działa");

export default Post;
