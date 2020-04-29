import React, { useState, useEffect } from 'react';
import axios from 'axios'




function Albums(){
    const [myAlbums, setMyAlbums]= useState([])
    //need a useeffect using axios

    useEffect(() =>{
        axios.get('http://localhost:3001/albums').then(resp=>{
            setMyAlbums(resp.data)
        })


    },[])
    return <div>
    <h1>MY ALBUMS</h1>
    <ul className="albumList">
        {myAlbums.map(item => {
            return <li className="titleThumbnail">{item.title}<img className="thumbnail" src={item.thumbnail}/></li>
            
        })}
    </ul>
  </div>

     
}

export default Albums

//make a list using MAP
//return photo and album name