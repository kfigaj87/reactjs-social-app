import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/Post";
import AddPost from "../components/AddPost";
import FollowRecommendations from "../components/FollowRecommendations";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

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
      {props.user && (
        <FollowRecommendations posts={posts} getLatestPosts={getLatestPosts} />
      )}

      <div className="postList">
        {posts.map((post) => {
          return (
            <Post
              post={post}
              key={post.id}
              setPosts={setPosts}
              user={props.user}
              posts={posts}
              getLatestPosts={getLatestPosts}
            />
          );
        })}
      </div>
      <button className="button btnHome" onClick={getNextPosts}>
        <FontAwesomeIcon icon={faSpinner} /> {""}
        Load more
      </button>
    </div>
  );
};

export default Home;
