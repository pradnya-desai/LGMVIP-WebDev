import { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./SocialCard";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingSpinner from "./LoadingSpinner";
function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);


  const displayUsers=()=>{
  
      (async () => {
        let userData;
        try {
          setLoading(true);
          const response = await fetch("https://reqres.in/api/users?page=1");
          userData = await response.json();
           setLoading(false);
        } catch (error) {
          console.log(error);
          userData = [];
          setLoading(false);
        }
        setAllUsers(userData.data);
        setUsers(userData.data);
      })();
   
  }

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.first_name} ${user.last_name}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  return (
    <div className="App">
      {loading ? <LoadingSpinner /> : displayUsers}
      <header>
    <button type="button" className="btn btn-info" onClick={displayUsers} disabled={loading}>Get Users</button><br/>
</header>
      <h1>Social Cards</h1>
      <br/><input className="search-box" onInput={filterCards} placeholder="Search..."/>

      <div className="cards-container">

      {users.map((user, index) => (
        
        <SocialCard key={index} userData={user} />


        ))}
      
      </div>
    </div>
  );
}

export default App;
