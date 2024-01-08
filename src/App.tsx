import React, {useState} from 'react';
import CallGPT from './api/gpt.ts';
import ScheduleInput from './components/ScheduleInput.tsx';

const dummyData = JSON.parse(
  `{"title":"대구에서 친구들이랑 약속", "analysis":"어떨까", "content":"이게", "result":"어때"}`,
);

function App() {
  const [data, setData] = useState(dummyData);
  const [isLoading, setIsLoading] = useState(false);
  const handleClickAPICall = async userInput => {
    try {
      setIsLoading(true);
      const message = await CallGPT({
        prompt: `${userInput}`,
      });
      setData(JSON.parse(message));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = userInput => {
    handleClickAPICall(userInput);
  };

  console.log('>>data', data);
  return (
    <div className="App">
      <ScheduleInput isLoading={isLoading} onSubmit={handleSubmit} />
      <button onClick={handleClickAPICall}>GPT API call</button>
      <div>title: {data?.title}</div>
      <div>analysis: {data?.analysis}</div>
      <div>schedule_content: {data?.content}</div>
      <div>schedule_result: {data?.result}</div>
      <div>isLoading: {isLoading ? 'Loading...' : 'finish'}</div>
    </div>
  );
}

export default App;
