import React from 'react';
import './App.css';
import Navigation from './components/Navigation';

const serverUrl = 'http://www'

function App() {
  return (
    <>
    <Navigation serverUrl={serverUrl}/>
    </>
  );
}

export default App;
