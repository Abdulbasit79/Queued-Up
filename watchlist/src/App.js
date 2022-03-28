import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Header}  from "./components/Header"
import {WatchList} from "./components/WatchList.js"
import {Watched} from "./components/Watched.js"
import {Add} from "./components/Add.js"
import "./lib/font-awesome/css/all.min.css" 
import './App.css';

function App() {
  return (
   <Router>
    <Header/>


    <Switch> 
      <Route exact path = "/">
        <WatchList/>
      </Route>

      <Route path= "/Watched">
        <Watched/>

      </Route>
     
      <Route path= "/add">
        <Add/>

      </Route>
    </Switch>
   </Router>

    );
}

export default App;
  
