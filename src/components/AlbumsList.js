import React, { Component } from "react";
import axios from 'axios';


export default class AlbumList extends Component {
  
  state = { 
    albums: []
  };

  componentDidMount() {
    console.log(this.props.match.params.id)
    this.getAlbums(this.props.match.params.id);
  }


  getAlbums = (userId) => {
  
    let url = `https://jsonplaceholder.typicode.com/albums/`;
    if(userId){
    url+="?userId="+ userId
   }
    axios.get(url).then(res => {
      this.setState({ albums: res.data });
    });
  };

  render() {
    
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
            {this.state.albums.map( album => (
              <tr key={album.id}>
                <th scope="row">{album.userId}</th>
                <td>{album.id}</td>
                <td>{album.title}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
