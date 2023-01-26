
import React, {useState, useEffect} from 'react';

export default function PostData (){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

   
    const submit = e => {
        e.preventDefault();
        fetch('http://localhost:3001/users',{
            method:'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type': 'application/json'}
        }).then(response => console.log(response))
    }

    return(
        <form onSubmit={submit}>
            <input type="text" name={username}
            value={username} onChange = {event => setUsername(event.target.value)} />
            <br />
            <input type="text" name={password}
            value={password} onChange = {event => setPassword(event.target.value)} />
            <br />
            <input type="submit" value="Sign up"></input>
       
        </form>
    )

}

