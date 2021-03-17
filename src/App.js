import './App.css';
import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
  );
}

export default App;
