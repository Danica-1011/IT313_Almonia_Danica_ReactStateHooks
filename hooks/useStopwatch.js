import { useState, useEffect } from 'react';

/**
 * Requirement 3: Custom hook that manages stopwatch time.
 * Accepts `isRunning` boolean as an argument.
 */
export default function useStopwatch(isRunning) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let intervalId = null;

    // Only start the interval when isRunning is true
    if (isRunning) {
      intervalId = setInterval(() => {
        // Functional update form prevents stale closure issues
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    // Cleanup function: clears the interval when isRunning becomes false or unmounts
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]); // Dependency array: re-run effect whenever isRunning changes

  return seconds;
}