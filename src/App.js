import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.scss';
import People from "./pages/People";
import Home from "./pages/Home";
import Films from "./pages/Films";
import Navigation from "./components/Navlinks/Navigation";
import Footer from "./components/Footer/Footer";
import LogoView from "./components/Logo/Logo-view";

function App() {
  return (
   <Router>
       <div className="header">
            <Navigation />
            <LogoView />
       </div>
       <div className="body">
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
       </div>
       <div className="footer">
        <Footer/>
       </div>
   </Router>
  );
}

export default App;
