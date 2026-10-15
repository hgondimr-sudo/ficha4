import { useState } from "react";
import Card from "./Card.jsx";

const cards = [
    { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
    { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
    { name: "Rei dos heróis", type: "Humano", attack: 10, defense: 5 },
    { name: "Mestre dos magos", type: "Humano", attack: 12, defense: 3 },
    { name: "Guardião Paladino", type: "Humano", attack: 6, defense: 11 },
];

export default function App() {
  return (
    <main>
      <h1>A minha coleção</h1>
      
      <p>Tenho {cards.length} cartas</p>

      <div>
        {cards.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </div>
    </main>
  );
}