import { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUser(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="user-list-container">
      <h1 className="title">User List</h1>
      <div className="user-cards">
        {listOfUser.map((user) => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
