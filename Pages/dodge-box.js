import { useState, useEffect } from "react";

export default function DodgeBox() {
  const [playerX, setPlayerX] = useState(180);
  const [obstacles, setObstacles] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const gameWidth = 400;
  const gameHeight = 400;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setPlayerX((prev) => Math.max(prev - 20, 0));
      } else if (e.key === "ArrowRight") {
        setPlayerX((prev) => Math.min(prev + 20, gameWidth - 20));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setObstacles((prev) => [
        ...prev,
        { id: Date.now(), x: Math.random() * (gameWidth - 20), y: 0 },
      ]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (gameOver) return;
    const timer = setInterval(() => {
      setObstacles((prev) =>
        prev
          .map((obs) => ({ ...obs, y: obs.y + 10 }))
          .filter((obs) => obs.y < gameHeight)
      );
    }, 100);
    return () => clearInterval(timer);
  }, [gameOver]);

  useEffect(() => {
    obstacles.forEach((obs) => {
      if (
        obs.y + 20 > gameHeight - 20 &&
        obs.x < playerX + 20 &&
        obs.x + 20 > playerX
      ) {
        setGameOver(true);
      }
    });
  }, [obstacles, playerX]);

  const resetGame = () => {
    setPlayerX(180);
    setObstacles([]);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold">Dodge the Box</h1>
      <div className="relative mt-4" style={{ width: `${gameWidth}px`, height: `${gameHeight}px`, backgroundColor: "#eee", border: "1px solid #ccc" }}>
        <div style={{ position: "absolute", bottom: 0, left: `${playerX}px`, width: "20px", height: "20px", backgroundColor: "blue" }}></div>
        {obstacles.map((obs) => (
          <div
            key={obs.id}
            style={{
              position: "absolute",
              top: `${obs.y}px`,
              left: `${obs.x}px`,
              width: "20px",
              height: "20px",
              backgroundColor: "red",
            }}
          ></div>
        ))}
      </div>
      {gameOver && (
        <div className="mt-4">
          <p>Game Over!</p>
          <button onClick={resetGame} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
            Restart
          </button>
        </div>
      )}
    </div>
  );
}