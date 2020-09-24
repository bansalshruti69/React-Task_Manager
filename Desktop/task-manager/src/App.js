import React from 'react';
import UserBoard from './userboard/UserBoard.js';
import DashBoard from './dashboard/DashBoard.js';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import { DASHBOARD } from './reducer/actions/header.js';

const App = ({page})=>{
  const engine = new Styletron();
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        {(page === DASHBOARD) ? <DashBoard/>:<UserBoard/>}
      </BaseProvider>
    </StyletronProvider>
  )
}

export default App;
