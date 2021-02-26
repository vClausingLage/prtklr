import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom"
import Home from './components/home'
import Skills from './components/skills'
import CV from './components/cv'
import Projekte from './components/projekte'
import Footer from './components/footer'

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const App = () => {

  return (
    <Router>
      <div className="background">
        <nav className="navbar">
          <NavLink to="/" exact={true} className="left" activeStyle={{ color: "rgb(255, 94, 0)" }}>clausing-lage</NavLink>
          <a href="https://github.com/vClausingLage" target="_blank" className="right social"><GitHubIcon /></a>
          <a href="https://www.linkedin.com/feed/" target="_blank" className="right social"><LinkedInIcon /></a>
          <NavLink to="/projekte" className="right" activeStyle={{ color: "rgb(255, 94, 0)" }}>Projekte</NavLink>
          <NavLink to="/skills" className="right" activeStyle={{ color: "rgb(255, 94, 0)" }}>Skills</NavLink>
        </nav>

        <Switch>
          <Route path="/skills" component={ Skills }>
            <Skills />
          </Route>
          <Route path="/cv" component={ CV }>
            <CV />
          </Route>
          <Route path="/projekte" component={ Projekte }>
            <Projekte />
          </Route>
          <Route path="/" component={ Home }>
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
