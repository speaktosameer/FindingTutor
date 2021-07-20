import React from 'react';
import Home from './pages';
import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import SignInPage from '../src/pages/SignInPage';
import SignUpPage from '../src/pages/SignUpPage';
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/SignInPage" component={SignInPage} exact/>
          <Route path="/SignUpPage" component={SignUpPage} exact/>
        </Switch>
    </Router>
    
  );
}

export default App;
