import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Mini Games Hub</h1>
      <ul className="space-y-2 text-lg">
        <li><Link href="/click-speed" className="text-blue-500 underline">Click Speed Test</Link></li>
        <li><Link href="/word-scramble" className="text-blue-500 underline">Word Scramble</Link></li>
        <li><Link href="/rock-paper-scissors" className="text-blue-500 underline">Rock, Paper, Scissors</Link></li>
        <li><Link href="/memory-game" className="text-blue-500 underline">Memory Game (Card Flip)</Link></li>
        <li><Link href="/reaction-speed" className="text-blue-500 underline">Reaction Speed Test</Link></li>
        <li><Link href="/trivia-quiz" className="text-blue-500 underline">Trivia Quiz Game</Link></li>
        <li><Link href="/dodge-box" className="text-blue-500 underline">Dodge the Box</Link></li>
        <li><Link href="/avoid-the-walls" className="text-blue-500 underline">Avoid the Walls</Link></li>
        <li><Link href="/target-shooter" className="text-blue-500 underline">Target Shooter</Link></li>
        <li><Link href="/tower-builder" className="text-blue-500 underline">Tower Builder</Link></li>
        <li><Link href="/jump-game" className="text-blue-500 underline">Jump Over Obstacles</Link></li>
        <li><Link href="/balance-ball" className="text-blue-500 underline">Balance the Ball</Link></li>
        <li><Link href="/speed-typing" className="text-blue-500 underline">Speed Typing Test</Link></li>
        <li><Link href="/maze-escape" className="text-blue-500 underline">Maze Escape</Link></li>
      </ul>
    </div>
  );
}