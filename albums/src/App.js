import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Albums from './Albums'
import Details from './Detail'

function App() {
  return (
    <div className="App">
     <Router>
        <Route path= "/" exact component={Albums} />
        <Route path= "/Albums/:id" component={Details} />

     </Router>
    </div>
  );
}

export default App;
