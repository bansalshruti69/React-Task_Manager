import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserBoard from './userboard/userBoard.js';
import DashBoard from './dashboard/dashBoard.js';

function App() {
  const [page,setPage] = React.useState('userboard');
  return (
    (page==='userboard') ? <UserBoard currState={page} handleClick={(val)=>setPage(val)}/> : <DashBoard currState={page} handleClick={(val)=>setPage(val)}/>
  )
}

export default App;
