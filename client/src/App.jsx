import { useState } from "react";
import Card from "./Card.jsx";

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Rei dos heróis", type: "Humano", attack: 10, defense: 5 },
  { name: "Mestre dos magos", type: "Humano", attack: 12, defense: 3 },
  { name: "Guardião Paladino", type: "Humano", attack: 6, defense: 11 },
];

function App() {
  const [filter, setFilter] = useState("Todas");

  const filteredCards = cards.filter((card) => {
    if (filter === "Criaturas") return card.type === "Criatura";
    if (filter === "Humanos") return card.type === "Humano";
    return true;
  });

  return (
    <main>
      <h1>A minha coleção</h1>
      <div>
        <button onClick={() => setFilter("Todas")}>Todas</button>
        <button onClick={() => setFilter("Criaturas")}>Só criaturas</button>
        <button onClick={() => setFilter("Humanos")}>Só humanos</button>
      </div>
      <p>Tenho {cards.length} cartas ({filteredCards.length} à vista)</p>

      {filteredCards.map((card) => (
        <Card key={card.name} card={card} />
      ))}
    </main>
  );
}

export default App;