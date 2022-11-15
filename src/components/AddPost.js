import React, { useState } from "react";
import axios from "axios";
import "./AddPost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const AddPost = (props) => {
  const [postContent, setPostContent] = useState("");

  const addPost = (e) => {
    e.preventDefault();
    if (!postContent) {
      return;
    }

    axios
      .post("https://akademia108.pl/api/social-app/post/add", {
        content: postContent,
      })
      .then((req) => {
        console.log(req.data);
        let reqData = req.data;
        console.log(reqData);
        props.getPrevPosts();
        setPostContent("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="addpost">
      <form onSubmit={addPost}>
        <textarea
          className="postContent"
          type="textarea"
          name="textarea"
          value={postContent}
          placeholder="..."
          cols="30"
          rows="5"
          onChange={(e) => {
            setPostContent(e.target.value);
          }}
        ></textarea>
        <button className="btnAddPost button">
          {" "}
          <FontAwesomeIcon icon={faComment} /> {""}
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
