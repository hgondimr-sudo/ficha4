export default function Card({ card }) {
  return (
    <div className="card">
      <h3>{card.name}</h3>
      <p>Tipo: {card.type}</p>
      <p>Ataque: {card.attack}</p>
      <p>Defesa: {card.defense}</p>
    </div>
  );
}