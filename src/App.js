import './App.css';
import React from 'react';
import { HashRouter as Router} from 'react-router-dom'
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

      </div>
    </Router>
  );
}

export default App;
