/* eslint-disable */

import React, {useState} from 'react';
import {Input, Button} from 'antd';
const {TextArea} = Input;

const ScheduleInput = ({isLoading, onSubmit}) => {
  const [userInput, setUserInput] = useState('');
  const handleUserInput = e => {
    setUserInput(e.target.value);
  };
  const handleClick = () => {
    onSubmit(userInput);
  };
  return (
    <div>
      <TextArea
        value={userInput}
        onChange={handleUserInput}
        placeholder="일정을 적어주세요"
      />
      <Button loading={isLoading} onClick={handleClick}>
        GPT 스케쥴을 정리해줘
      </Button>
    </div>
  );
};

export default ScheduleInput;
