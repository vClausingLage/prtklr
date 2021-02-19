import React, {useState} from "react";
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

function activeSet(e){
  console.log(e.target.value)
}

const App = () => {
  const [active, setActive] = useState();
  return (
    <Router>
      <div style={{height: '100vh'}}>
        <nav className="navbar">
          <Link className={`left ${active}`} onClick={e => activeSet(e)} to="/home">clausing-lage</Link>
          <Link className="right" to="/cv">CV</Link>
          <Link className="right" to="/projekte">Projekte</Link>
          <Link className="right" to="/skills">Skills</Link>
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/cv">
            <CV />
          </Route>
          <Route path="/projekte">
            <Projekte />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
