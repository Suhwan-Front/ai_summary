import React, {useState} from 'react';
import {CallGPT} from './api/gpt';

function App() {
  const handleClickAPICall = async () => {
    await CallGPT();
  };
  return (
    <div className="App">
      <button onClick={handleClickAPICall}>GPT API call</button>
    </div>
  );
}

export default App;
