import { useState, useEffect } from 'react';

export default function SpeedTypingTest() {
  const sentence = "The quick brown fox jumps over the lazy dog.";
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(null);

  useEffect(() => {
    if (!startTime && input.length === 1) {
      setStartTime(Date.now());
    }
    if (input === sentence && startTime) {
      const timeTaken = (Date.now() - startTime) / 1000; // seconds
      const words = sentence.split(" ").length;
      const calculatedWpm = (words / (timeTaken / 60)).toFixed(2);
      setWpm(calculatedWpm);
    }
  }, [input, sentence, startTime]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Speed Typing Test</h1>
      <p>Type the sentence below:</p>
      <blockquote style={{ fontStyle: "italic", margin: "20px auto", width: "80%" }}>
        {sentence}
      </blockquote>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "80%", padding: "10px", fontSize: "16px" }}
      />
      {wpm && <p>Your typing speed: {wpm} WPM</p>}
    </div>
  );
}
