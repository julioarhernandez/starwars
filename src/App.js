import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

import './App.scss';
import People from "./pages/People";
import Home from "./pages/Home";
import Films from "./pages/Films";

function App() {
  return (
   <Router>
     <Link to="/">Home</Link>
     <Link to={'/persons/'}>Persons</Link>
     <Link to={'/films/'}>Films</Link>
     <Switch>
       <Route path={"/persons/"}>
         <People/>
       </Route>
      <Route path={"/films/"}>
         <Films />
       </Route>
       <Route path={"/"}>
         <Home/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
