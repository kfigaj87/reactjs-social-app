import React, { useState } from "react";

import axios from "axios";

import "./Post.css";

const Post = (props) => {
  const [deleteModalDisplay, setdeleteModalDisplay] = useState(false);
  const [likesCount, setLikesCount] = useState(props.post.likes.length);
  const [doesUserLiked, setDoesUserLiked] = useState(
    props.post.likes.filter((like) => like.username === props.user?.username)
      .length !== 0
  );
  const likePost = (id, isLiked) => {
    axios
      .post(
        "http://akademia108.pl/api/social-app/post/" +
          (isLiked ? "dislike" : "like"),
        {
          post_id: id,
        }
      )
      .then(() => {
        setLikesCount(likesCount + (isLiked ? -1 : 1));
        setDoesUserLiked(!isLiked);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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

  // console.log(props.post.likes);
  return (
    <div className="post">
      <div className="avatar_img">
        <img className="avatar" src={props.post.user.avatar_url} alt="avatar" />
        <p className="user-name">{props.post.user.username}</p>
        <span className="created_at">{props.post.created_at.slice(0, 10)}</span>
      </div>
      <p className="content">{props.post.content}</p>
      {props.user && (
        <div className="post-delete">
          <button
            className="btn-post-delete"
            onClick={() => setdeleteModalDisplay(true)}
          >
            Delete post
          </button>
        </div>
      )}

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
      <div className="">
        <button
          className="btnLikeDislike"
          onClick={() => likePost(props.post.id, doesUserLiked)}
        >
          {" "}
          {doesUserLiked ? "dislike" : "like"}
        </button>
        <p className="likeIcon">{likesCount}</p>
      </div>
      <div className="">
        <button>unfollow</button>
      </div>
    </div>
  );
};

export default Post;
