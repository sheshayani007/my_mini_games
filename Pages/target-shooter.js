import { useState } from "react";

export default function TargetShooter() {
  const [score, setScore] = useState(0);
  const [targetPosition, setTargetPosition] = useState({ x: 100, y: 100 });

  const moveTarget = () => {
    setTargetPosition({
      x: Math.random() * 300,
      y: Math.random() * 300,
    });
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold">Target Shooter</h1>
      <p className="mt-2">Click the red box as fast as possible!</p>
      <p className="mt-2 text-lg">Score: {score}</p>
      <div className="relative w-[400px] h-[400px] bg-gray-200 mt-4">
        <div
          className="absolute w-12 h-12 bg-red-500 cursor-pointer"
          style={{ left: targetPosition.x, top: targetPosition.y }}
          onClick={() => {
            setScore(score + 1);
            moveTarget();
          }}
        ></div>
      </div>
    </div>
  );
}