import "./App.css";
import React, {useState} from "react";
import UserDetails from "./components/UserDetails";
import UsersList from "./components/UsersList";

function App() {
  const [userData, setUserData]= useState({})
  return (
    <div className="App">
      <UsersList setUserData={setUserData} />
      <UserDetails userData={userData} />
    </div>
  );
}

export default App;
