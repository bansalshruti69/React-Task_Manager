import React from 'react';
import './App.css';
import UserBoard from './userboard/userBoard.js';
import DashBoard from './dashboard/dashBoard.js';

function App() {
  const [page,setPage] = React.useState('userboard');
  const component =  (page==='userboard') ? <UserBoard currState={page} handleClick={(val)=>setPage(val)}/> : <DashBoard currState={page} handleClick={(val)=>setPage(val)}/>;
  return component;
}

export default App;
