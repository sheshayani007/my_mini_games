import { useState, useEffect } from "react";

export default function MazeEscape() {
  // Define a simple maze. The maze is represented as strings,
    // where '#' are walls, spaces are paths, and 'E' is the exit.
      const mazeArr = [
          "#########",
              "#       #",
                  "# ####  #",
                      "#    #  #",
                          "# ## #  #",
                              "#    ####",
                                  "#      E#",
                                      "#########"
                                        ];
                                          const [playerX, setPlayerX] = useState(1);
                                            const [playerY, setPlayerY] = useState(1);

                                              // Render the maze, highlighting the player position.
                                                const drawMaze = () => {
                                                    return mazeArr.map((row, y) => (
                                                          <div key={y}>
                                                                  {row.split("").map((cell, x) => (
                                                                            <span
                                                                                        key={x}
                                                                                                    style={{
                                                                                                                  color: x === playerX && y === playerY ? "red" : "black",
                                                                                                                                fontWeight: x === playerX && y === playerY ? "bold" : "normal",
                                                                                                                                            }}
                                                                                                                                                      >
                                                                                                                                                                  {x === playerX && y === playerY ? "P" : cell}
                                                                                                                                                                            </span>
                                                                                                                                                                                    ))}
                                                                                                                                                                                          </div>
                                                                                                                                                                                              ));
                                                                                                                                                                                                };

                                                                                                                                                                                                  // Listen for arrow key presses to move the player.
                                                                                                                                                                                                    useEffect(() => {
                                                                                                                                                                                                        const handleKeyDown = (e) => {
                                                                                                                                                                                                              let dx = 0,
                                                                                                                                                                                                                      dy = 0;
                                                                                                                                                                                                                            if (e.key === "ArrowUp") dy = -1;
                                                                                                                                                                                                                                  if (e.key === "ArrowDown") dy = 1;
                                                                                                                                                                                                                                        if (e.key === "ArrowLeft") dx = -1;
                                                                                                                                                                                                                                              if (e.key === "ArrowRight") dx = 1;
                                                                                                                                                                                                                                                    const newX = playerX + dx;
                                                                                                                                                                                                                                                          const newY = playerY + dy;
                                                                                                                                                                                                                                                                // Only move if the new cell isn't a wall.
                                                                                                                                                                                                                                                                      if (mazeArr[newY][newX] !== "#") {
                                                                                                                                                                                                                                                                              setPlayerX(newX);
                                                                                                                                                                                                                                                                                      setPlayerY(newY);
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                  // If the new cell is the exit, declare victory.
                                                                                                                                                                                                                                                                                                        if (mazeArr[newY][newX] === "E") {
                                                                                                                                                                                                                                                                                                                alert("You Win!");
                                                                                                                                                                                                                                                                                                                        setPlayerX(1);
                                                                                                                                                                                                                                                                                                                                setPlayerY(1);
                                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                                                                                                                              window.addEventListener("keydown", handleKeyDown);
                                                                                                                                                                                                                                                                                                                                                  return () => window.removeEventListener("keydown", handleKeyDown);
                                                                                                                                                                                                                                                                                                                                                    }, [playerX, playerY]);

                                                                                                                                                                                                                                                                                                                                                      return (
                                                                                                                                                                                                                                                                                                                                                          <div className="flex flex-col items-center mt-10">
                                                                                                                                                                                                                                                                                                                                                                <h1 className="text-2xl font-bold">Maze Escape</h1>
                                                                                                                                                                                                                                                                                                                                                                      <p className="mt-2">Use arrow keys to move the player (P) to the exit (E)!</p>
                                                                                                                                                                                                                                                                                                                                                                            <div className="mt-4 font-mono text-xl">{drawMaze()}</div>
                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                                                  }