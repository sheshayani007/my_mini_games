import { useState, useEffect } from "react";

export default function TargetShooter() {
  const [score, setScore] = useState(0);
  const [targetPosition, setTargetPosition] = useState({ x: 100, y: 100 });

  const moveTarget = () => {
    setTargetPosition({
      x: Math.random() * 350,
      y: Math.random() * 350,
    });
  };

  return (
    <div style={styles.container}>
      <h1>Target Shooter</h1>
      <p>Click the red target!</p>
      <p>Score: {score}</p>
      <div style={styles.gameArea}>
        <div
          style={{
            ...styles.target,
            left: targetPosition.x,
            top: targetPosition.y,
          }}
          onClick={() => {
            setScore(score + 1);
            moveTarget();
          }}
        />
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
    background: "#f4f4f4",
  },
  target: {
    position: "absolute",
    width: "50px",
    height: "50px",
    background: "red",
    borderRadius: "50%",
    cursor: "pointer",
  },
};
