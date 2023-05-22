import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav/Nav';
import "./components/Nav/Nav.css";
import { Route, Routes } from 'react-router-dom';
import Featured from './components/Featured/Featured';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      console.log(data.time);
      setCurrentTime(data.time);
    })
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Featured />} />
      </Routes>
      <Navbar />
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;
