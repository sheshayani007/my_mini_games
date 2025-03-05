import { useState, useEffect } from "react";

export default function BalanceBall() {
  const [tilt, setTilt] = useState(0);
  const [ballX, setBallX] = useState(0);
  const [ballVelocity, setBallVelocity] = useState(0);
  const platformWidth = 200;
  const accelerationFactor = 500;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") setTilt(-1);
      else if (e.key === "ArrowRight") setTilt(1);
    };
    const handleKeyUp = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") setTilt(0);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();

    const update = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;
      const acceleration = tilt * accelerationFactor;
      const newVelocity = ballVelocity + acceleration * delta;
      const newBallX = ballX + newVelocity * delta;
      if (newBallX < -platformWidth / 2 || newBallX > platformWidth / 2) {
        alert("Game Over!");
        setBallX(0);
        setBallVelocity(0);
      } else {
        setBallX(newBallX);
        setBallVelocity(newVelocity);
      }
      animationFrameId = requestAnimationFrame(update);
    };
    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [tilt, ballX, ballVelocity]);

  return (
    <div style={styles.container}>
      <h1>Balance the Ball</h1>
      <p>Use left/right arrow keys to tilt the platform.</p>
      <div style={styles.gameArea}>
        <div
          style={{
            ...styles.platform,
            transform: `rotate(${tilt * 15}deg)`
          }}
        />
        <div
          style={{
            ...styles.ball,
            left: 200 + ballX - 10
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
    background: "#fafafa",
  },
  platform: {
    position: "absolute",
    width: "200px",
    height: "10px",
    background: "blue",
    left: "100px",
    top: "350px",
    transformOrigin: "center",
  },
  ball: {
    position: "absolute",
    width: "20px",
    height: "20px",
    background: "red",
    borderRadius: "50%",
    top: "340px",
  },
};
