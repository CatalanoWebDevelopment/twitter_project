import React, { useEffect, useState } from 'react';
import './App.scss';
import testFile from './components/test';

function App() {
  const [compiledData, setCompiledData] = useState([]); 
  useEffect(() => {
    testFile().then(data => {
      console.log(data)
    })
  }, []);

  return (
    <div className="App">
      API RESPONSE: 
    </div>
  );
}

export default App;
