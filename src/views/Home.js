import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/Post";
import AddPost from "../components/AddPost";

import "./Home.css";

const Home = (props) => {
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
    axios
      .post("https://akademia108.pl/api/social-app/post/older-then", {
        date: posts[posts.length - 1].created_at,
      })
      .then((res) => {
        const postsNext = res.data;

        setPosts(posts.concat(postsNext));
      });
  };
  const getPrevPosts = () => {
    axios
      .post("https://akademia108.pl/api/social-app/post/newer-then", {
        date: posts[0].created_at,
      })
      .then((res) => {
        let reqData = res.data;
        setPosts(reqData.concat(posts));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getLatestPosts();
  }, [props.user]);

  return (
    <div className="home">
      <h2 className="nav-h">Home</h2>

      {props.user && <AddPost user={props.user} getPrevPosts={getPrevPosts} />}

      <div className="postList">
        {posts.map((post) => {
          return (
            <Post
              post={post}
              key={post.id}
              setPosts={setPosts}
              user={props.user}
            />
          );
        })}
      </div>
      <button className="button btn-home" onClick={getNextPosts}>
        Load more
      </button>
    </div>
  );
};

export default Home;

// WĘDRÓWKA PROPSÓW!! PRZEANALIZOWAĆ!!
