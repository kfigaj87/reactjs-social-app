import React, { useState } from "react";
import axios from "axios";

import "./Post.css";
const Post = (props) => {
  const [deleteModalDisplay, setdeleteModalDisplay] = useState();

  const deletePost = (id, e) => {
    if (window.confirm("Czy jesteś tego pewien?"));
    e.preventDefault();
    axios
      .delete(`https://akademia108.pl/api/social-app/post/delete${id}.json`, {
        post: "",
        user: "",
      })

      .then((res) => {
        let resData = res.data;
        setdeleteModalDisplay("");
        console.log("deleted!", res.data).catch((error) => {
          console.error(error);
        });
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
      <div>
        <button className="post-delete" onClick={deletePost}>
          Delete post
        </button>
      </div>
    </div>
  );
};

export default Post;
