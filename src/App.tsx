import React, {useState} from 'react';
import CallGPT from './api/gpt.ts';
import ScheduleInput from './components/ScheduleInput.tsx';

function App() {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleClickAPICall = async () => {
    try {
      setIsLoading(true);
      const message = await CallGPT({
        prompt: `12월 30일 계대 앞에서 기숙사 친구들 보기로함`,
      });
      setData(JSON.parse(message));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {};
  return (
    <div className="App">
      <ScheduleInput isLoading={isLoading} onSubmit={handleSubmit} />
      <button onClick={handleClickAPICall}>GPT API call</button>
      <div>title: {data}</div>
      <div>analysis: {data}</div>
      <div>schedule_content: {data}</div>
      <div>schedule_result: {data}</div>
      <div>isLoading: {isLoading ? 'Loading...' : 'finish'}</div>
    </div>
  );
}

export default App;
