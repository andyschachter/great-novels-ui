import React, { useState, useEffect } from 'react';
import './App.css';
import search from './components/novelSearch'
import { fetchData, filtered } from './utils/novels'

function App() {

  const [novelData, setNovelData] = useState([])
  const [foundNovels, setFoundNovels] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function pullData() {

      const data = await fetchData()

      setNovelData(data)
      setFoundNovels(data)
    }

    pullData()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
