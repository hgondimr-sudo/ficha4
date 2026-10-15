export default function Card({ card }) {
  const isStrong = card.attack >= 8;

  return (
    <div className="card">
      <h3>
        {/* Usamos fontWeight: "bold" se for forte, ou normal caso contrário */}
        <span style={{ fontWeight: isStrong ? "bold" : "normal" }}>
          {card.name}
        </span>
      </h3>
      <p>Tipo: {card.type}</p>
      <p>Ataque: {card.attack}</p>
      <p>Defesa: {card.defense}</p>
    </div>
  );
}