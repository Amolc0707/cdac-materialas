
import React, { useState, useEffect } from 'react';

export default function GetData(){
    const [username, setUsername] = useState('');
    const[user, setUser] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3001/users', {
            method:'GET'
        }).then(response => response.json()).then(data=>
            {console.log(data);
                setUser(data);
           
            })
            ;
 },[]);
    return(
        <div>
            {user.map(user => (
                <div key={user.id}>
                <h5>{user.username} {user.email}</h5></div>
            ))}
        </div>
    )
}

