import { useState, useEffect } from "react";

export default function MazeEscape() {
  const maze = [
    "#########",
    "#       #",
    "# ####  #",
    "#    #  #",
    "# ## #  #",
    "#    ####",
    "#      E#",
    "#########",
  ];
  const [playerX, setPlayerX] = useState(1);
  const [playerY, setPlayerY] = useState(1);

  const drawMaze = () => {
    return maze.map((row, y) => (
      <div key={y} style={{ lineHeight: "1.5", fontFamily: "monospace" }}>
        {row.split("").map((cell, x) => (
          <span
            key={x}
            style={{
              color: x === playerX && y === playerY ? "red" : "black",
              fontWeight: x === playerX && y === playerY ? "bold" : "normal",
              paddingRight: "5px",
            }}
          >
            {x === playerX && y === playerY ? "P" : cell}
          </span>
        ))}
      </div>
    ));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      let dx = 0, dy = 0;
      if (e.key === "ArrowUp") dy = -1;
      if (e.key === "ArrowDown") dy = 1;
      if (e.key === "ArrowLeft") dx = -1;
      if (e.key === "ArrowRight") dx = 1;
      const newX = playerX + dx;
      const newY = playerY + dy;
      if (maze[newY][newX] !== "#") {
        setPlayerX(newX);
        setPlayerY(newY);
        if (maze[newY][newX] === "E") {
          alert("You Win!");
          setPlayerX(1);
          setPlayerY(1);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playerX, playerY]);

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "monospace" }}>
      <h1>Maze Escape</h1>
      <p>Use arrow keys to move "P" to the exit "E"</p>
      <div>{drawMaze()}</div>
    </div>
  );
}
