import React, {useState} from 'react';
import CallGPT from './api/gpt.ts';

function App() {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleClickAPICall = async () => {
    try {
      setIsLoading(true);
      const message = await CallGPT();
      setData(message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="App">
      <button onClick={handleClickAPICall}>GPT API call</button>
      <div>data: {data}</div>
      <div>isLoading: {isLoading ? 'Loading...' : 'finish'}</div>
    </div>
  );
}

export default App;
