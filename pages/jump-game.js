import { useState, useEffect } from "react";

export default function JumpGame() {
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " " && !isJumping) {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 500);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isJumping]);

  return (
    <div style={styles.container}>
      <h1>Jump Over Obstacles</h1>
      <p>Press Space to jump!</p>
      <div style={styles.gameArea}>
        <div style={{ ...styles.player, bottom: isJumping ? "100px" : "0" }} />
        <div style={styles.obstacle} />
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px" },
  gameArea: {
    position: "relative",
    width: "400px",
    height: "200px",
    border: "2px solid black",
    margin: "0 auto",
    background: "#ccc",
  },
  player: {
    position: "absolute",
    left: "50px",
    width: "50px",
    height: "50px",
    background: "blue",
  },
  obstacle: {
    position: "absolute",
    left: "300px",
    bottom: "0",
    width: "50px",
    height: "50px",
    background: "red",
  },
};
