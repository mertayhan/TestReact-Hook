import React, { useState, useEffect } from "react";
import axios from "axios";

const NewApi = () => {
  const [person, setPerson] = useState([]);

  const getPerson = async () => {
    axios.get("https://api.myjson.com/bins/u2esu").then(res => {
      console.log(res.data);
      setPerson(res.data);
    });
  };
  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>username</th>
            <th>name</th>
            <th>surname</th>
            <th>country</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
        {person.map(pers=>(
            <tr key={1}> 
                <td>{pers.username}</td>
                <td>{pers.name}</td>
                <td>{pers.surname}</td>
                <td>{pers.country}</td>
                <td>{pers.address}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};
export default NewApi;
