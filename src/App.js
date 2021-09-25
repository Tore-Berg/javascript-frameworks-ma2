import './App.css';
import RocketList from './components/RocketList';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import RocketDetails from './components/RocketDetails';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Switch>
          <Route path="/" exact>
            <RocketList />
          </Route>
          <Route path="/detail/:id">
            <RocketDetails />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
