import React from 'react';
import './App.css';
import RVToolsParser from './components/RVToolsParser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DataCenter Migration</h1>
      </header>
      <main>
        <RVToolsParser />
      </main>
      <footer>
        <p>Upload RVTools Excel exports, parse to JSON, and submit to AWS Lambda</p>
      </footer>
    </div>
  );
}

export default App;
