import React, {useState} from 'react';

const ScheduleInput = ({isLoading, onSubmit}) => {
  const [userInput, setUserInput] = useState('');
  const handleUserInput = e => {
    setUserInput(e.target.value);
  };
  return <input className="" value={userInput} onChange={handleUserInput} />;
};

export default ScheduleInput;
