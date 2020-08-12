import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "./styles/App.scss";
import Main from './pages/Main';
import Circuit from './pages/Circuit';
import Meditate from './pages/Meditate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/circuit' component={Circuit} />
          <Route path='/meditate' component={Meditate} />
        </Switch>
      </BrowserRouter>
    </div >
  )
}

export default App;
