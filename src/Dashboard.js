import React, { useState } from 'react';
import {isAuthenticated, logout} from "./Auth";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    const [getText, setText] = useState('');
    const [getList, setList] = useState([]);

    const onAddHandler = () => {
      setList([...getList, getText]);
      setText('');
    }

    if(!isAuthenticated){
        navigate("/");
        return null;
    }

    const logoutHandler = () => {
        logout();
        navigate("/");
    }

  return (
    <div className='main'>
      <div className='top'>
        <h1>Dashboard</h1>
        <button onClick={logoutHandler}>Logout</button>
      </div>
      <div className='mid'>
        <input type='text' placeholder='Task...' value={getText} onChange={e => setText(e.target.value)} required/>
        <button onClick={onAddHandler}>Add Task</button> 
      </div>
      {getList && getList.map((obj, index) => {
        return(<div className='list' key={index}>
          <li>{obj}</li>
        </div>)
      })}
    </div>
  )
}

export default Dashboard;