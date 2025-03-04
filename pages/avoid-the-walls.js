import { useEffect, useState } from "react";

export default function AvoidTheWalls() {
  const [position, setPosition] = useState({ x: 200, y: 200 });
  const speed = 5;

  useEffect(() => {
    const handleKeyDown = (e) => {
      setPosition((prev) => {
        let newX = prev.x, newY = prev.y;
        if (e.key === "ArrowUp") newY -= speed;
        if (e.key === "ArrowDown") newY += speed;
        if (e.key === "ArrowLeft") newX -= speed;
        if (e.key === "ArrowRight") newX += speed;
        if (newX < 0 || newY < 0 || newX > 400 || newY > 400) {
          alert("Game Over!");
          return { x: 200, y: 200 };
        }
        return { x: newX, y: newY };
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold">Avoid the Walls</h1>
      <div className="relative w-[400px] h-[400px] bg-gray-300 border mt-4">
        <div
          className="absolute w-5 h-5 bg-blue-500"
          style={{ left: position.x, top: position.y }}
        ></div>
      </div>
      <p className="mt-4">Use arrow keys to move.</p>
    </div>
  );
}