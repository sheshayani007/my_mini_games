import { useState, useEffect } from "react";

export default function JumpGame() {
  const [position, setPosition] = useState(100);
    const [isJumping, setIsJumping] = useState(false);

      useEffect(() => {
          const handleJump = (e) => {
                if (e.key === " " && !isJumping) {
                        setIsJumping(true);
                                setTimeout(() => setIsJumping(false), 500);
                                      }
                                          };

                                              window.addEventListener("keydown", handleJump);
                                                  return () => window.removeEventListener("keydown", handleJump);
                                                    }, [isJumping]);

                                                      return (
                                                          <div className="flex flex-col items-center mt-10">
                                                                <h1 className="text-2xl font-bold">Jump Over Obstacles</h1>
                                                                      <p className="mt-2">Press space to jump!</p>
                                                                            <div className="relative w-[400px] h-[200px] bg-gray-300 mt-4 border">
                                                                                    <div
                                                                                              className="absolute w-10 h-10 bg-blue-500"
                                                                                                        style={{ bottom: isJumping ? 100 : 0, left: 50 }}
                                                                                                                ></div>
                                                                                                                        <div className="absolute w-10 h-10 bg-red-500 bottom-0 left-[300px]"></div>
                                                                                                                              </div>
                                                                                                                                  </div>
                                                                                                                                    );
                                                                                                                                    }