import React, { useState } from "react";
import axios from "axios";

import "./Post.css";

const Post = (props) => {
  const [deleteModalDisplay, setdeleteModalDisplay] = useState(false);

  const deletePost = (id) => {
    axios
      .post(`https://akademia108.pl/api/social-app/post/delete`, {
        post_id: id,
      })

      .then((res) => {
        let resData = res.data;

        props.setPosts((posts) => {
          return posts.filter((post) => post.id !== resData.post_id);
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
        <button
          className="post-delete"
          onClick={() => setdeleteModalDisplay(true)}
        >
          Delete post
        </button>
      </div>

      {deleteModalDisplay && (
        <div className="deleteConfirmation">
          <h3>Are you sure you want to delete post?</h3>
          <button className="btn-yes" onClick={() => deletePost(props.post.id)}>
            Yes
          </button>{" "}
          <button
            className="btn-no"
            onClick={() => setdeleteModalDisplay(false)}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default Post;
