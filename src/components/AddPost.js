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
        <textarea
          className="post-content"
          type="textarea"
          name="textarea"
          value={postContent}
          placeholder="..."
          onChange={(e) => {
            setPostContent(e.target.value);
          }}
        ></textarea>
        <button className="btn-addPost">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
