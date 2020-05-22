import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Header from './components/header/header';
import Countrydata from './components/countrydata/countrydata';
import Indiadata from './components/indiadata/indiadata';
function App() {
  return (
    <Router>
      <Header />
      <NavLink to=""></NavLink>
      <NavLink to="/india"></NavLink>
      <NavLink to="/country"></NavLink>
      <Route exact path="/" component={Indiadata} />
      <Route path="/india" component={Indiadata} />
      <Route path="/country" component={Countrydata} />
    </Router>
  );
}
export default App;
