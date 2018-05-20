import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Login from './components/Login';
import RebrandlyLinks from './components/Links/RebrandlyLinks';

class App extends Component{
  render(){
    return(
    <MuiThemeProvider>
      <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={DashBoard} />
            <Route path='/link' component={RebrandlyLinks} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
    );
  }
}

export default App;
