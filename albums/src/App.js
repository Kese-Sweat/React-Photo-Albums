import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Albums from './Albums'
import Details from './Detail'
import PopUp from './albumImage'

function App() {
  return (
    <div className="App">
     <Router>
        <Route path= "/" exact component={Albums} />
        <Route path= "/albums/:id" component={Details} />
        

     </Router>
    </div>
  );
}

export default App;
