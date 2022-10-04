import "./App.css";

const notes = [
  {
    id: 13,
    content: "HTML is easy",
    date: "2019-07-30",
    important: true,
  },
  {
    id: 112,
    content: "Browser can execute only JavaScript",
    date: "2020-01-7",
    important: false,
  },
  {
    id: 67,
    content: "GET and POST are the most important methods of HTTPS",
    date: "2018-11-10",
    important: false,
  },
  {
    id: 49,
    content: "I believe me",
    date: "2022-09-29",
    important: true,
  },
];

function App() {
  if (!notes) {
    return "No tenemos notas que mostrar valor de undefined";
  }
  return (
    <ul>
      <h1>Clase de Formularios</h1>
      {notes.map((item) => {
        return (
          <li key={item.id}>
            <p>
              <strong>{item.content}</strong>
            </p>
            <small>
              <time>{item.date}</time>
            </small>
            <p>{item.important ? "verdad" : "falso"}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
