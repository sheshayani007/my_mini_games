import { useState, useEffect } from "react";

export default function DodgeTheBox() {
  const [playerX, setPlayerX] = useState(175);
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  
  // Create new obstacle every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setObstacles((obs) => [
        ...obs,
        { x: Math.random() * 350, y: 0, id: Date.now() },
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Move obstacles and check for collision
  useEffect(() => {
    const interval = setInterval(() => {
      setObstacles((obs) =>
        obs
          .map((o) => ({ ...o, y: o.y + 5 }))
          .filter((o) => o.y < 400)
      );
      setScore((prev) => prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Listen for player movement (left/right arrow keys)
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") {
        setPlayerX((prev) => Math.max(prev - 20, 0));
      } else if (e.key === "ArrowRight") {
        setPlayerX((prev) => Math.min(prev + 20, 350));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Check for collisions
  useEffect(() => {
    obstacles.forEach((o) => {
      if (
        o.x < playerX + 50 &&
        o.x + 50 > playerX &&
        o.y < 380 && // player's vertical position is fixed at 380
        o.y + 50 > 380
      ) {
        alert("Game Over! Score: " + score);
        window.location.reload();
      }
    });
  }, [obstacles, playerX, score]);

  return (
    <div style={styles.container}>
      <h1>Dodge the Box</h1>
      <p>Score: {score}</p>
      <div style={styles.gameArea}>
        {/* Player */}
        <div style={{ ...styles.player, left: playerX }} />
        {/* Obstacles */}
        {obstacles.map((o) => (
          <div key={o.id} style={{ ...styles.obstacle, left: o.x, top: o.y }} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px" },
  gameArea: {
    position: "relative",
    width: "400px",
    height: "400px",
    border: "2px solid black",
    margin: "0 auto",
    overflow: "hidden",
    background: "#eee",
  },
  player: {
    position: "absolute",
    bottom: "20px",
    width: "50px",
    height: "50px",
    background: "blue",
  },
  obstacle: {
    position: "absolute",
    width: "50px",
    height: "50px",
    background: "red",
  },
};
