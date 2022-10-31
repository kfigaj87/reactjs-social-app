import React from "react";
import "./AddPost.css";

const AddPost = () => {
  return (
    <div className="addpost">
      <form>
        <input type="textarea" name="" placeholder="add..."></input>
        <button>Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
