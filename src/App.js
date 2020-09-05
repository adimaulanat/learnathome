import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Post = props => (
  <img src={props.src} alt="profile picture" />
)

const Profile = (props) => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <>
      <img src="https://via.placeholder.com/300" alt="profile picture" />
      <div>@{props.username}</div>
      <button onClick={() => setIsFollowed(!isFollowed)}>{isFollowed ? 'Unfollow' : 'Follow'}</button>
      <div>Posts</div>
      <div>Follower</div>
      <div>Following</div>
      <div>Bio</div>
      <Post src="https://via.placeholder.com/300" />
    </>
  )
}

function App() {
  const username = 'adimaulanat'
  return (
    <Profile username={username} />
  );
}

export default App;
