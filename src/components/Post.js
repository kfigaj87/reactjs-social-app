import React, { useState } from "react";
import axios from "axios";
import "./Post.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

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
  const disfollow = (id) => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/disfollow", {
        leader_id: id,
      })
      .then(() => {
        console.log("disfollow");
        props.getLatestPosts();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="post">
      <div className="avatar_img">
        <img className="avatar" src={props.post.user.avatar_url} alt="avatar" />
        <p className="user-name">{props.post.user.username}</p>
        <span className="created_at">{props.post.created_at.slice(0, 10)}</span>
      </div>
      <p className="content">{props.post.content}</p>

      {deleteModalDisplay && (
        <div className="deleteConfirmation">
          <h3>Are you sure you want to delete post?</h3>
          <button
            className="btnYes button"
            onClick={() => deletePost(props.post.id)}
          >
            Yes
          </button>{" "}
          <button
            className="btnNo button"
            onClick={() => setdeleteModalDisplay(false)}
          >
            No
          </button>
        </div>
      )}
      <div className="btnDeleteLikeDislike">
        <div className="disfollowRecommendations">
          {props.user && props.post.user.username !== props.user?.username && (
            <button
              className="button btnDisfollowRecommendations"
              onClick={() => disfollow(props.post.user.id)}
            >
              {" "}
              <FontAwesomeIcon icon={faMinus} /> {""}
              Disfollow
            </button>
          )}
        </div>
        {props.user && (
          <div className="postDelete">
            <button
              className="button btnPostDelete"
              onClick={() => setdeleteModalDisplay(true)}
            >
              {" "}
              <FontAwesomeIcon icon={faTrash} /> {""}
              Delete post
            </button>
          </div>
        )}
        {props.user && (
          <button
            className="button btnLikeDislike "
            onClick={() => likePost(props.post.id, doesUserLiked)}
          >
            {" "}
            {doesUserLiked ? (
              <FontAwesomeIcon icon={faHeartBroken} />
            ) : (
              <FontAwesomeIcon icon={faHeart} />
            )}
          </button>
        )}
        {props.user && <p className="likeIcon">{likesCount}</p>}
      </div>
    </div>
  );
};

export default Post;
