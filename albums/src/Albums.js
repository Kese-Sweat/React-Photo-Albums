import React, { useState, useEffect } from 'react';
import axios from 'axios'




function Albums(){
    const [myAlbums, setMyAlbums]= useState([])
    //need a useeffect using axios
    return <div>
    <h1>MY ALBUMS</h1>
    <ul>
        
    </ul>
  </div>

     
}

export default Albums

//make a list using MAP
//return photo and album name