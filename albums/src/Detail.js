import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




function AlbumDetails(props){
    
    const [details, myDetails] = useState ({pictures:[]})
    const [albumLink, setLink] = useState ('')
    

    
    useEffect(()=>{
        const id = props.match.params.id
        axios.get('http://localhost:3001/albums/' + id).then(resp=>{
            myDetails(resp.data)
            setLink(resp.data)

            
            console.log(resp.data)
        })
        console.log(albumLink)
        
    },[props.match.params.id])
    

        
    return <div>
    <h1>{details.title}</h1>
    <div>
    <ul className="detailList">
        {details.pictures.map(item =>{
            return <li key={item.id}><img className="detailImg" src={item.src}/><div className="detailTitle">{item.title}</div> </li>            
        })}
    </ul>
    </div>
    <ul className="sideList">
          <li className="albumLinks">
            <Link className="links" to="/Albums/1">VEHICLES</Link>
          </li>
          <li className="albumLinks">
            <Link className="links" to="/Albums/2">COFFEE</Link>
          </li>
          <li className="albumLinks">
            <Link className="links" to="/Albums/3">INSPIRATION</Link>
          </li>
          <li className="albumLinks">
            <Link className="links" to="/Albums/4">PANAMA</Link>
          </li>
          <li className="albumLinks">
            <Link className="links" to="/Albums/5">RESTAURANT</Link>
          </li>
          <li className="albumLinks">
            <Link className="links" to="/Albums/6">R.I.P KOBE</Link>
          </li>
        </ul>
    </div>
     
}

export default AlbumDetails

//3 pics with pic names
// 6 links that goes back to albums
//album name in header