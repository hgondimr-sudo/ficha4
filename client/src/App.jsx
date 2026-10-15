// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server
// (o que fizeste na aula 2).
const cards = [
    { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
    { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
    { name: "Rei dos heróis", type: "Humano", attack: 10, defense: 5 },
    { name: "Mestre dos magos", type: "Humano", attack: 12, defense: 3 },
    { name: "Guardião Paladino", type: "Humano", attack: 6, defense: 11 },
]

function App() {
  return (
    <main>
      <h1>A minha coleção</h1>
    </main>
  );
}

export default App;
