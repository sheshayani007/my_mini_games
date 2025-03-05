import { useState } from "react";

export default function TowerBuilder() {
  const [blocks, setBlocks] = useState([]);

  const dropBlock = () => {
    if (blocks.length >= 10) {
      alert("Tower completed!");
      setBlocks([]);
    } else {
      setBlocks([...blocks, blocks.length * 20]);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Tower Builder</h1>
      <p>Click the button to drop a block.</p>
      <div style={styles.towerArea}>
        {blocks.map((bottom, idx) => (
          <div key={idx} style={{ ...styles.block, bottom: bottom }} />
        ))}
      </div>
      <button onClick={dropBlock} style={styles.button}>
        Drop Block
      </button>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px" },
  towerArea: {
    position: "relative",
    width: "200px",
    height: "220px",
    margin: "20px auto",
    border: "2px solid black",
    background: "#ddd",
  },
  block: {
    position: "absolute",
    width: "200px",
    height: "20px",
    background: "blue",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
