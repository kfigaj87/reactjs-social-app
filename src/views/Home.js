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

  const getNextPosts = () => {
    // console.log("działam");
    axios
      .post("https://akademia108.pl/api/social-app/post/older-then", {
        date: posts[posts.length - 1].created_at,
      })
      .then((res) => {
        const postsNext = res.data;

        setPosts(posts.concat(postsNext));
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
      <button className="button btn-home" onClick={getNextPosts}>
        Load more
      </button>
    </div>
  );
};

export default Home;
