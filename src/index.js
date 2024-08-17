import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Main(){
  const[users,setUsers] = useState([]);
  const[loading,setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setUsers(data);
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
      setLoading(false);
      })
  }, []);
  if(loading){
    return <p>Loading...</p>;
  }
  return (
    <div>
      <ul>
        {users.map(users => (
          <li key={users.id}>{users.id}:{users.name}</li>
          ))}
      </ul>
    </div>
  )
}
ReactDOM.render(<Main />,document.getElementById('root'));