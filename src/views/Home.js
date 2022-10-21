import React, { useEffect } from "react";
import axios, { Axios } from "axios";
import Post from "../components/Post";
import { useState } from "react";

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
      <h2>Home</h2>
      <div className="postList">
        {posts.map((post) => {
          return <Post post={post} />;
        })}
      </div>
    </div>
  );
};

export default Home;
