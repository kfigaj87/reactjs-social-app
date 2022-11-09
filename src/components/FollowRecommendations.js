import React, { useEffect, useState } from "react";
import "./FollowRecommendations.css";
import axios from "axios";
import Post from "./Post";

const FollowRecommendations = (props) => {
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = () => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/recommendations")
      .then((res) => {
        setRecommendations(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getRecommendations();
  }, [props.posts]);

  //   console.log(props.user);

  const follow = (id) => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/follow", {
        leader_id: id,
      })
      .then(() => {
        console.log("follow");
        props.getLatestPosts();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="followRecommendations">
      {recommendations.map((recommendation) => {
        return (
          <div key={recommendation.id} className="followRecommendation">
            <img src={recommendation.avatar_url} />
            <h3>{recommendation.username}</h3>
            <button onClick={() => follow(recommendation.id)}>Follow</button>
          </div>
        );
      })}
      <Post
        getRecommendations={getRecommendations}
        recommendations={recommendations}
      />
    </div>
  );
};

export default FollowRecommendations;
