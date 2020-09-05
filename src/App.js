import React, { useState } from "react";
import "./styles.css";

const Post = ({ src }) => <img src={src} alt="profile picture" />;

const Profile = (props) => {
  const { username } = props;
  const [isFollowed, setIsFollowed] = useState(false);
  const [keyword, setKeyword] = useState('');
  const postCount = 5
  const posts = [...Array(postCount)];
  return (
    <React.Fragment>
      <div>Search Result for account: {keyword}</div>
      <input onChange={e => setKeyword(e.target.value)} value={keyword} placeholder="search profile" />
      <img src="https://via.placeholder.com/150" alt="profile picture" />
      <div>@{username}</div>
      <button onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
      <div>{postCount} Posts</div>
      <div>Follower</div>
      <div>Following</div>
      <div>Bio</div>
      {postCount === 0 ? (
        <div>No post</div>) : (
          <div className="posts">
            {posts.map((_, idx) => (
              <Post
                src="https://via.placeholder.com/300"
                key={idx}
                className="post"
              />
            ))}
          </div>
        )
      }
      <Post src="https://via.placeholder.com/300" />
    </React.Fragment>
  );
};

export default function App() {
  const username = "instagram";
  return <Profile username={username} />;
}
