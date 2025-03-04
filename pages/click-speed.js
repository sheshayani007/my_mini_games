import { useState, useEffect } from "react";

export default function ClickSpeed() {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (timeLeft > 0 && active) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setActive(false);
    }
  }, [timeLeft, active]);

  const handleClick = () => {
    if (active) setCount(count + 1);
  };

  const resetGame = () => {
    setCount(0);
    setTimeLeft(10);
    setActive(true);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold">Click Speed Test</h1>
      <p className="mt-2">Time Left: {timeLeft} seconds</p>
      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        disabled={!active}
      >
        Click Me!
      </button>
      <p className="mt-4">Clicks: {count}</p>
      {!active && (
        <button
          onClick={resetGame}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Restart
        </button>
      )}
    </div>
  );
}