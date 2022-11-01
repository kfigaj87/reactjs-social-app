import React, { useState } from "react";
import axios from "axios";
import "./AddPost.css";

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
        <input
          type="textarea"
          name="textarea"
          value={postContent}
          placeholder="add..."
          onChange={(e) => {
            setPostContent(e.target.value);
          }}
        ></input>
        <button>Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
