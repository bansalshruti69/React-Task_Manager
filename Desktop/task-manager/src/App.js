import React from 'react';
import UserBoard from './userboard/UserBoard.js';
import DashBoard from './dashboard/DashBoard.js';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';

const App = ()=>{
  const engine = new Styletron();

  const [page,setPage] = React.useState('userboard');
  const pageHandleClick = React.useCallback((val)=>{
    setPage(val);
  },[])
  const dashBoardComp = (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <DashBoard currState={page} handleClick={pageHandleClick}/>
      </BaseProvider>
    </StyletronProvider>
  )
  const userBoardcomp = (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <UserBoard currState={page} handleClick={pageHandleClick}/>
      </BaseProvider>
    </StyletronProvider>
  )
  return  (page==='userboard') ? userBoardcomp: dashBoardComp;
}

export default App;
