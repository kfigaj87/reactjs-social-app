import React, { useState } from "react";
import axios from "axios";
import "./Post.css";
import AddPost from "./AddPost";

const Post = (props) => {
  const [postContent, setpostContent] = useState();

  const addPost = () => {
    axios.post("https://akademia108.pl/api/social-app/post/add").then((res) => {
      const postContent = res.data;

      setpostContent(postContent);
    });
  };
  // console.log(props.post);
  return (
    <div className="post">
      <div className="avatar_img">
        <img className="avatar" src={props.post.user.avatar_url} alt="avatar" />
        <p className="user-name">{props.post.user.username}</p>
        <span className="created_at">{props.post.created_at.slice(0, 10)}</span>
      </div>

      <p className="content">{props.post.content}</p>
    </div>
  );
};

export default Post;
