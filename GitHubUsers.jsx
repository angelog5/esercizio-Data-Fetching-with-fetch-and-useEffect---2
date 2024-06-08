import GithubUser from "./GitHubUser";
import { useState } from "react";

const GithubUsers = () => {
  const [username, setUsername] = useState("");
  const [userList, setUserList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setUserList([...userList, username.trim()]);
      setUsername("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {userList.map((user, index) => (
          <li key={index}>
            <GithubUser username={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUsers;
