import React, { useState } from 'react';
import Countdown from 'react-countdown';
import useCandy from '../hooks/useCandy';
import CountdownRender from './CountdownRender';

const Countdown2 = () => {
  const { startDateSeed } = useCandy();
  const [startDate, setStartDate] = useState(new Date(startDateSeed));
  //   const [isActive, setIsActive] = useState(false);

  const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
    return (
      // <CounterText>
      //   {days} day{days >= 1 ? '' : 's'}, {hours} hours, {minutes} minutes,{' '}
      //   {seconds} seconds
      // </CounterText>
      <CountdownRender
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  };
  return (
    <Countdown
      date={startDate}
      //   onMount={({ completed }) => completed && setIsActive(true)}
      //   onComplete={() => setIsActive(true)}
      renderer={renderCounter}
    />
  );
};

export default Countdown2;
