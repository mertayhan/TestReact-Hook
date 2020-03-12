import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const UserListHook = () =>{

    const[users,setUsers]= useState([]);
    const getUsers = async () =>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
           
            setUsers(res.data);
          });
    }   

    useEffect(()=>{
       getUsers()
        
    },[])
    

    var nameSplit = name => name.split(" ");

    return (
        
            <div className="ui row">
        <h2>Users Table</h2>
        <table className="ui table">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
            <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{nameSplit(user.name)[0]}</td>
            <td>{nameSplit(user.name)[1]}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address.street}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.company.name}</td>
            <td>
              <button className="ui button">
            <Link to={`/albumlist/${user.id}`}>get{user.id}</Link>
              </button>
            </td>
          </tr>
            ))}
          </tbody>
        </table>
      </div>
        
    )
}

export default UserListHook