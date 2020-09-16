import React from 'react';
import './App.css';
import UserBoard from './userboard/UserBoard.js';
import DashBoard from './dashboard/DashBoard.js';

const App = ()=>{
  const [page,setPage] = React.useState('userboard');
  const pageHandleClick = React.useCallback((val)=>{
    setPage(val);
  },[])
  const dashBoardComp = <DashBoard currState={page} handleClick={pageHandleClick}/>
  const userBoardcomp = <UserBoard currState={page} handleClick={pageHandleClick}/>
  return  (page==='userboard') ? userBoardcomp: dashBoardComp;
}

export default App;
