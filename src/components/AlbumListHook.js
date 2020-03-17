import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import AlbumListItem from './AlbumListItem';
import axios from "axios";
import NewApi from "./NewApi";

const AlbumListHook = () => {
  const [albums, setAlbums] = useState([]);
  const userId = useParams();

  
  useEffect(() => {
    console.log(userId)
    getAlbums()
  },[]);


  // useEffect(() => {

  // },[albums]);



  const getAlbums = async () => {
    
    let url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
    
    axios.get(url).then(res => {
      setAlbums(res.data);
    });
  };

  

  return (
    <div className="ui row">
      <h2>Albums Table</h2>
      <table className="ui table">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {albums.map(album => (
          <AlbumListItem album={album}></AlbumListItem>
          ))}
        </tbody>
      </table>
      <NewApi></NewApi>

    </div>
  );
};

export default AlbumListHook;
