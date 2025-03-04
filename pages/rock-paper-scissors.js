import { useState } from "react";

export default function RockPaperScissors() {
  const choices = ["Rock", "Paper", "Scissors"];
  const [result, setResult] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  const play = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(compChoice);
    if (choice === compChoice) {
      setResult("It's a tie!");
    } else if (
      (choice === "Rock" && compChoice === "Scissors") ||
      (choice === "Paper" && compChoice === "Rock") ||
      (choice === "Scissors" && compChoice === "Paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold">Rock, Paper, Scissors</h1>
      <div className="mt-4 space-x-4">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => play(choice)}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            {choice}
          </button>
        ))}
      </div>
      {result && (
        <div className="mt-4">
          <p>Your Choice: {userChoice}</p>
          <p>Computer's Choice: {computerChoice}</p>
          <p>Result: {result}</p>
        </div>
      )}
    </div>
  );
}