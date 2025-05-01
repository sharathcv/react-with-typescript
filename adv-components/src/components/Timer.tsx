import Container from './UI/Container';
import { Timer as TimerProps } from "../store/timers-context";
import { useState, useEffect, useRef } from 'react';

export default function Timer({name, duration}: TimerProps) {
    const interval = useRef<number | null>(null); // ref can be used to connect to non-DOM elements as well
    const [remainingTime, setRemainingTime] = useState(duration * 1000);

    if (remainingTime <= 0 && interval.current) {
        clearInterval(interval.current);
    }

    useEffect(() => {
        const timer = setInterval(function () {
            setRemainingTime(prevTime => prevTime - 50);
        }, 50);
        interval.current = timer;
        return () => clearInterval(timer);
    }, []);

    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max={duration * 1000} value={remainingTime} /></p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}