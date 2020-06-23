import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Unauthenticated from './components/Unauthenticated/Unauthenticated';
import Authenticated from './components/Authenticated/Authenticated'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path='/login' component={Login}/> */}
          {/* <Route exact path='/' component={Landing}/> */}
          <Route path='/dashboard' component={Authenticated}/>
          
          <Route path='/' component={Unauthenticated}/>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
