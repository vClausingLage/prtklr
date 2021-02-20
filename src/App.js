import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './components/home'
import Skills from './components/skills'
import CV from './components/cv'
import Projekte from './components/projekte'

//import HomeIcon from '@material-ui/icons/Home'
//import AccountCircleIcon from '@material-ui/icons/AccountCircle'
//import SchoolIcon from '@material-ui/icons/School'
//import BuildIcon from '@material-ui/icons/Build'

const App = () => {

  const tabs = [
    ["left","/","clausing-lage"],
    //["right","cv","CV"],
    ["right","projekte","Projekte"],
    ["right","skills","Skills"],
  ]

  function tabClick(index){
    let n = tabs.length
    for (let i = 0; i < n; i++) {
      document.getElementById("links" + i).style.color = "white"
    }
    document.getElementById("links" + index).style.color = "rgb(255, 94, 0)"
  }

  return (
    <Router>
      <div style={{height: '100vh'}}>
        <nav className="navbar">
        {tabs.map((element, index) =>
            <Link id={`links${index}`} key={index} className={`${element[0]}`} to={`${element[1]}`} onClick={e => tabClick(index)}>{element[2]}</Link>
        )}
        
        </nav>

        <Switch>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/cv">
            <CV />
          </Route>
          <Route path="/projekte">
            <Projekte />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
