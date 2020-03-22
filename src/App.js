import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import './App.css';
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Tomato from './pages/Tomato'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
        <div>
            <h1>Here is App.js handling our <em>routing</em></h1>
            {/* 4. Using a semantic tag to denote nav links*/}
            <nav>
                <ul>
                    <li>
                        {/* 5. Creating the anchor tags using the link component from React Router*/}
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/tomato">Tomato</Link>
                    </li>
                </ul>
            </nav>
            {/* 6. Calling the components we imported from "pages" to render in response to the link */}
            <Switch>

                <Route path="/about" component={ AboutUs } />
                <Route path="/tomato" component={ Tomato } />
                <Route path="/" exact component={ Home } />
                
                <Route component={ NotFound } />

            </Switch>
            
        </div>
    </Router>
  );
}

export default App;
