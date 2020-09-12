import React, { useState } from "react";
import Menu from "./components/Menu";
import "./styles.css";

const GoZomato = () => {
  const [keyword, setKeyword] = useState('');
  const postCount = 4
  const posts = [...Array(postCount)];
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1%' }}>
        <div>Current city: {keyword}</div>
        <input onChange={e => setKeyword(e.target.value)} value={keyword} placeholder="search city" />
        <button>Change City</button>
      </div>
      {postCount === 0 ? (
        <div>No post</div>) : (
          <div className="posts">
            {posts.map((_, idx) => (
              <Menu name="Udon" budget="Rp. 50.000" cuisine='Japanese' picture="https://via.placeholder.com/200" rating={5} />
            ))}
          </div>
        )
      }
    </React.Fragment>
  );
};

export default function App() {
  return <GoZomato />;
}
