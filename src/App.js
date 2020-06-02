import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Header from './components/header/header';
import Countrydata from './components/countrydata/countrydata';
import Indiadata from './components/indiadata/indiadata';
import Chart from './components/charts/charts';
function App() {
  return (
    <Router>
      <Header />
      <NavLink to=""></NavLink>
      <NavLink to="/india"></NavLink>
      <NavLink to="/country"></NavLink>
      <NavLink to="/charts"></NavLink>
      <Route exact path="/" component={Indiadata} />
      <Route exact path="/india" component={Indiadata} />
      <Route path="/country" component={Countrydata} />
      <Route path="/charts" component={Chart} />
    </Router>
  );
}
export default App;
