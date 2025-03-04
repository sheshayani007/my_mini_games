import { useState, useEffect } from "react";

function scrambleWord(word) {
  const arr = word.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

export default function WordScramble() {
  const words = ["example", "react", "nextjs", "javascript", "coding"];
  const [currentWord, setCurrentWord] = useState("");
  const [scrambled, setScrambled] = useState("");
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    nextWord();
  }, []);

  const nextWord = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(word);
    setScrambled(scrambleWord(word));
    setGuess("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.toLowerCase() === currentWord.toLowerCase()) {
      setScore(score + 1);
      setMessage("Correct!");
      setTimeout(() => nextWord(), 1000);
    } else {
      setMessage("Incorrect, try again.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold">Word Scramble</h1>
      <p className="mt-2">Unscramble the word:</p>
      <div className="bg-gray-200 p-4 mt-4 text-lg">{scrambled}</div>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
      {message && <p className="mt-2">{message}</p>}
      <p className="mt-4">Score: {score}</p>
    </div>
  );
}