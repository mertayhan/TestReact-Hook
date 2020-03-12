import React from 'react';

const AlbumListItem = (album) =>{
    console.log(album)
    return(
        
        <tr key={album.id}>
        <th scope="row">{album.userId}</th>
        <td>{album.id}</td>
        <td>{album.title}</td>
        <td></td>
      </tr>
        
    )
}

export default AlbumListItem