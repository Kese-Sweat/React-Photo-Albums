import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function ImagePopUp(props){
    

    const [imageView, setView] = useState ({pictures:[]})

    
    useEffect(()=>{
        const id = props.match.params.id
        axios.get('http://localhost:3001/albums/' + id).then(resp=>{
            
setView(resp.data)

            
            console.log(resp.data)
        })
        
        
    },[props.match.params.id])
    

        
    return <div>
    <h1>{imageView.title}</h1>
    <ul className="detailList">
        {imageView.pictures.map(item =>{
            return <li key={item.id}>{item.title} <img src={item.src}/></li>            
        })}
    </ul>
    
    </div>
     
}

export default ImagePopUp