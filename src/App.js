import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/header/header';
import Countrydata from './components/countrydata/countrydata';
import Indiadata from './components/indiadata/indiadata';
function App() {
  return (
    <Router>
      <Header />
      <Link to=""></Link>
      <Link to="/country"></Link>
      <Route exact path="/" component={Indiadata} />
      <Route path="/country" component={Countrydata} />
    </Router>
  );
}
export default App;
