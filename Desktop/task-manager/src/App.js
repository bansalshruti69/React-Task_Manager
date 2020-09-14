import React from 'react';
import './App.css';
import UserBoard from './userboard/userBoard.js';
import DashBoard from './dashboard/dashBoard.js';

function App() {
  const [page,setPage] = React.useState('userboard');
  function pageHandleClick(val){
    setPage(val);
  }
  const component =  (page==='userboard') ? <UserBoard currState={page} handleClick={pageHandleClick}/> : <DashBoard currState={page} handleClick={pageHandleClick}/>;
  return component;
}

export default App;
