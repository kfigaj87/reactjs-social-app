import React, { useEffect, useReducer } from "react";
import axios, { Axios } from "axios";
import Post from "../components/Post";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getLatestPosts = () => {
    axios
      .post("http://akademia108.pl/api/social-app/post/latest")
      .then((res) => {
        const postsRes = res.data;

        setPosts(postsRes);
      });
  };

  useEffect(() => {
    getLatestPosts();
  }, []);

  return (
    <div className="home">
      <h2 className="nav-h">Home</h2>
      <div className="postList">
        {posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
