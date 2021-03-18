import React, { useEffect, useState } from 'react';
import './App.scss';
import testFile from './components/test';

function App() {
  const [page, updatePage] = useState(0);
  const [compiledData, setCompiledData] = useState(new Map()); 
  const [search_parameters, updateSearch] = useState("");

  useEffect(() => {
    testFile(search_parameters).then(data => {
      setCompiledData(compiledData.set(page, data));
    });
  }, [search_parameters, compiledData, page]);

  return (
    <div className="App">
      <input type="text" onKeyUp={(e) => updateSearch(e.target.value)} />
      <h1>API Response:</h1>
      <p>{(compiledData.get(page)) ? console.log(compiledData.get(page)) : ""}</p>
      <button type="button" onClick={() => updatePage(page + 1)}>Page {page}</button>
    </div>
  );
}

export default App;
