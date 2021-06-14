import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/novelSearch'
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

  useEffect(() => {
    
    const novels = filtered(novelData, searchTerm)

    setFoundNovels(novels)
  }, [searchTerm, novelData])

  return (
    <div>
      <Search
      novelDataAsProps={foundNovels}
      setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default App;
