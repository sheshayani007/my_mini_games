import { useState, useEffect } from "react";

export default function ReactionSpeed() {
  const [waiting, setWaiting] = useState(true);
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const [message, setMessage] = useState("Wait for green...");

  useEffect(() => {
    let timeout;
    if (waiting) {
      const delay = Math.random() * 3000 + 2000;
      timeout = setTimeout(() => {
        setMessage("Click now!");
        setStartTime(Date.now());
      }, delay);
    }
    return () => clearTimeout(timeout);
  }, [waiting]);

  const handleClick = () => {
    if (startTime) {
      const time = Date.now() - startTime;
      setReactionTime(time);
      setMessage(`Your reaction time: ${time} ms`);
      setWaiting(false);
    }
  };

  const resetGame = () => {
    setWaiting(true);
    setStartTime(null);
    setReactionTime(null);
    setMessage("Wait for green...");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold">Reaction Speed Test</h1>
      <div
        className="w-64 h-64 mt-4 flex items-center justify-center cursor-pointer"
        style={{ backgroundColor: startTime ? "green" : "red" }}
        onClick={handleClick}
      >
        <span className="text-white text-xl">{message}</span>
      </div>
      {reactionTime && (
        <button onClick={resetGame} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Try Again
        </button>
      )}
    </div>
  );
}