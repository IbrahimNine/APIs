import React, { useState, useEffect } from "react";
import UserItem from "./UserItem";
import axios from "axios";

function UsersList({ setUserData }) {
  const [listOfUSer, setlistOfUSer] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    function fetchUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setlistOfUSer(res.data))
        .catch((err) => console.log(err))
        .finally(setLoading(false));
    }
    fetchUsers();
  }, []);

  return (
    <div className="UsersList">
      <div className="ListWrapper">
        {loading ? (
          <img
            src="https://i.stack.imgur.com/kOnzy.gif"
            alt="Loading animation"
            id="loadingAnimation"
          />
        ) : (
          listOfUSer.map((user) => (
            <UserItem key={user.id} {...user} setUserData={setUserData} />
          ))
        )}
      </div>
    </div>
  );
}

export default UsersList;
