import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'




function Albums(props){
    const [myAlbums, setMyAlbums]= useState([])
    useEffect(() =>{
        axios.get('http://localhost:3001/albums').then(resp=>{
            setMyAlbums(resp.data)
            console.log(resp.data)
        })
        

    },[props.match.params.id])
    return <div>
    <h1>MY ALBUMS</h1>
    <ul className="albumList">
        {myAlbums.map(item => {
            return <li className="titleThumbnail" key={item.id}><Link to={`/Albums/${item.id}`}>
                <img className="thumbnail" src={item.thumbnail}/><div className="albumTitle">{item.title}</div></Link></li>
            
        })}
    </ul>
    
  </div>

     
}

export default Albums

//make a list using MAP
//return photo and album name