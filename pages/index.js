import Link from 'next/link';

export default function Home() {
  return (
      <div style={styles.container}>
            <h1>Mini Games</h1>
                  <p>Select a game to play:</p>
                        <ul style={styles.list}>
                                <li><Link href="/click-speed-test">Click Speed Test</Link></li>
                                        <li><Link href="/word-scramble">Word Scramble</Link></li>
                                                <li><Link href="/rock-paper-scissors">Rock, Paper, Scissors</Link></li>
                                                        <li><Link href="/memory-game">Memory Game</Link></li>
                                                                <li><Link href="/reaction-test">Reaction Speed Test</Link></li>
                                                                        <li><Link href="/trivia-quiz">Trivia Quiz</Link></li>
                                                                                <li><Link href="/dodge-the-box">Dodge the Box</Link></li>
                                                                                        <li><Link href="/balance-the-ball">Balance the Ball</Link></li>
                                                                                                <li><Link href="/speed-typing">Speed Typing Test</Link></li>
                                                                                                        <li><Link href="/maze-escape">Maze Escape</Link></li>
                                                                                                              </ul>
                                                                                                                  </div>
                                                                                                                    );
                                                                                                                    }

                                                                                                                    const styles = {
                                                                                                                      container: {
                                                                                                                          textAlign: 'center',
                                                                                                                              padding: '20px',
                                                                                                                                  fontFamily: 'Arial, sans-serif',
                                                                                                                                    },
                                                                                                                                      list: {
                                                                                                                                          listStyle: 'none',
                                                                                                                                              padding: 0,
                                                                                                                                                },
                                                                                                                                                };