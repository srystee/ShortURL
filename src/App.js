import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Login from './components/Login';
import RebrandlyLinks from './components/Links/RebrandlyLinks';
import CreateLink from './components/Links/CreateLink';
import LinkEdit from './components/Links/LinkEdit';

class App extends Component{
  render(){
    return(
    <MuiThemeProvider>
      <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login} />
            <Route exact path="/" render={()=>(<Redirect to="/login"/>) }/>
            <Route path='/dashboard' component={DashBoard} />
            <Route exact path='/link' component={RebrandlyLinks} />
            <Route path='/create link' component={CreateLink}/>
            <Route path='/link/:id/edit' component={LinkEdit} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
    );
  }
}

export default App;
