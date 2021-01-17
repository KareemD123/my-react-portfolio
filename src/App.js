import React from 'react';
import './App.css';
import {Element} from 'react-scroll';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Courses from './components/Courses';
import {Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navbar />

      <Route exact path ="/" component = {Header} />
      <Route exact path ="/" component = {About} />
      <Route exact path ="/" component = {Skills} />
      <Route exact path ="/" component = {Projects} />
      <Route exact path ="/" component = {Contact} />
    </div>
  );
}

export default App;
