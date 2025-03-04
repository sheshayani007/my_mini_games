import { useState } from "react";

export default function TowerBuilder() {
  const [blocks, setBlocks] = useState([]);
  
  const dropBlock = () => {
    if (blocks.length >= 10) {
      alert("You built the tower!");
      setBlocks([]);
      return;
    }
    setBlocks([...blocks, blocks.length * 20]);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold">Tower Builder</h1>
      <p className="mt-2">Click to drop a block!</p>
      <div className="relative w-[200px] h-[220px] bg-gray-200 mt-4">
        {blocks.map((top, index) => (
          <div key={index} className="absolute w-[200px] h-5 bg-blue-500" style={{ bottom: top }}></div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={dropBlock}>
        Drop Block
      </button>
    </div>
  );
}