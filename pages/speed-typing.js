import { useState, useEffect } from "react";

export default function SpeedTyping() {
  const sentences = [
      "The quick brown fox jumps over the lazy dog.",
          "Practice makes perfect.",
              "Hello world and good luck."
                ];
                  const [sentence, setSentence] = useState("");
                    const [input, setInput] = useState("");
                      const [startTime, setStartTime] = useState(null);
                        const [finished, setFinished] = useState(false);
                          const [result, setResult] = useState(null);

                            // Pick a random sentence on first render.
                              useEffect(() => {
                                  setSentence(sentences[Math.floor(Math.random() * sentences.length)]);
                                    }, []);

                                      const handleChange = (e) => {
                                          const value = e.target.value;
                                              if (!startTime) setStartTime(Date.now());
                                                  setInput(value);
                                                      // When the input exactly matches the sentence, end the test.
                                                          if (value === sentence) {
                                                                const endTime = Date.now();
                                                                      const timeTaken = (endTime - startTime) / 1000; // seconds
                                                                            const minutes = timeTaken / 60;
                                                                                  const wordCount = sentence.split(" ").length;
                                                                                        const wpm = wordCount / minutes;
                                                                                              // Compute errors by comparing each character.
                                                                                                    let errors = 0;
                                                                                                          for (let i = 0; i < sentence.length; i++) {
                                                                                                                  if (value[i] !== sentence[i]) errors++;
                                                                                                                        }
                                                                                                                              setResult({ timeTaken, wpm, errors });
                                                                                                                                    setFinished(true);
                                                                                                                                        }
                                                                                                                                          };

                                                                                                                                            const resetGame = () => {
                                                                                                                                                setSentence(sentences[Math.floor(Math.random() * sentences.length)]);
                                                                                                                                                    setInput("");
                                                                                                                                                        setStartTime(null);
                                                                                                                                                            setFinished(false);
                                                                                                                                                                setResult(null);
                                                                                                                                                                  };

                                                                                                                                                                    return (
                                                                                                                                                                        <div className="flex flex-col items-center mt-10">
                                                                                                                                                                              <h1 className="text-2xl font-bold">Speed Typing Test</h1>
                                                                                                                                                                                    <p className="mt-2">Type the sentence below as fast as you can!</p>
                                                                                                                                                                                          <div className="bg-gray-200 p-4 mt-4 w-[400px] text-center">
                                                                                                                                                                                                  {sentence}
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                              <input
                                                                                                                                                                                                                      className="mt-4 border p-2 w-[400px]"
                                                                                                                                                                                                                              value={input}
                                                                                                                                                                                                                                      onChange={handleChange}
                                                                                                                                                                                                                                              disabled={finished}
                                                                                                                                                                                                                                                    />
                                                                                                                                                                                                                                                          {finished && result && (
                                                                                                                                                                                                                                                                  <div className="mt-4">
                                                                                                                                                                                                                                                                            <p>Time Taken: {result.timeTaken.toFixed(2)} seconds</p>
                                                                                                                                                                                                                                                                                      <p>WPM: {Math.round(result.wpm)}</p>
                                                                                                                                                                                                                                                                                                <p>Errors: {result.errors}</p>
                                                                                                                                                                                                                                                                                                          <button
                                                                                                                                                                                                                                                                                                                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                                                                                                                                                                                                                                                                                                                                  onClick={resetGame}
                                                                                                                                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                                                                                                                                        Try Again
                                                                                                                                                                                                                                                                                                                                                                  </button>
                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                )}
                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                      }