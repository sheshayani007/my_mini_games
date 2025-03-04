import { useState, useEffect } from "react";

const generateCards = () => {
  const cards = [];
  const values = ["A", "B", "C", "D", "E", "F", "G", "H"];
  values.forEach((val) => {
    cards.push({ id: Math.random(), value: val, flipped: false, matched: false });
    cards.push({ id: Math.random(), value: val, flipped: false, matched: false });
  });
  return cards.sort(() => Math.random() - 0.5);
};

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    setCards(generateCards());
  }, []);

  const resetCards = () => {
    setFirstCard(null);
    setSecondCard(null);
  };

  const handleCardClick = (card) => {
    if (card.flipped || card.matched) return;

    const newCards = cards.map((c) =>
      c.id === card.id ? { ...c, flipped: true } : c
    );
    setCards(newCards);

    if (!firstCard) {
      setFirstCard(card);
    } else if (!secondCard) {
      setSecondCard(card);
      setAttempts(attempts + 1);
      if (firstCard.value === card.value) {
        setCards((prev) =>
          prev.map((c) =>
            c.value === card.value ? { ...c, matched: true } : c
          )
        );
        resetCards();
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === firstCard.id || c.id === card.id
                ? { ...c, flipped: false }
                : c
            )
          );
          resetCards();
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold">Memory Game (Card Flip)</h1>
      <p className="mt-2">Attempts: {attempts}</p>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            className="w-16 h-16 border flex items-center justify-center cursor-pointer"
          >
            {card.flipped || card.matched ? card.value : "?"}
          </div>
        ))}
      </div>
    </div>
  );
}