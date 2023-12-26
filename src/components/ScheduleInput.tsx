import React, {useState} from 'react';

const ScheduleInput = ({isLoading, onSubmit}) => {
  const [userInput, setUserInput] = useState('');
  const handleUserInput = e => {
    setUserInput(e.target.value);
  };
  return (
    <div>
      <input
        className=""
        value={userInput}
        onChange={handleUserInput}
        placeholder="일정에 대해 간단히 적어주세요."
      />
      <button>GPT 일정 요약해줘</button>
    </div>
  );
};

export default ScheduleInput;
