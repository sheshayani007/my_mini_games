import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
];

export default function TriviaQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold">Trivia Quiz Game</h1>
      {!finished ? (
        <div className="mt-4">
          <p>{questions[current].question}</p>
          <div className="mt-2 space-y-2">
            {questions[current].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <p>Your score: {score} / {questions.length}</p>
          <button onClick={resetQuiz} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}