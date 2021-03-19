import './App.css';
import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProjectsList from './components/ProjectsList/ProjectsList';
import ArticlesList from './components/ArticlesList/ArticlesList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={ProjectsList}/>
        <Route exact path="/articles" component={ArticlesList}/>
      </div>
    </Router>
  );
}

export default App;
