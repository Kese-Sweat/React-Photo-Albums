import axios from 'axios'

export function getData(){
    return new Promise ((resolve, reject) =>{
        axios.get('http://localhost:3001/albums').then(resp =>{
            resolve(resp.data)
        })
    })



}
//axios.get method makes a git request to albums server
//.then resolves and gives you access to data