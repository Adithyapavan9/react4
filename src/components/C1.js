import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './C1.css';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://dummyjson.com/users')
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Dummy data</h1>
      <table>
        <thead >
          <tr class="h3">
            <th class="h3">ID</th>
            <th  class="h3">Profile pic</th>
            <th class="h3">Firstname</th>
            <th class="h3">Lastname</th>
            <th class="h3">Gender</th>
            <th class="h3">E-mail</th>
            <th class="h3">Username</th>
            <th class="h3">Domain</th>
            <th class="h3">IP</th>
            <th class="h3">university</th>


          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><div ><img src={user.image} width="50px" height="50px"/></div></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
