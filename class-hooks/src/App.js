import "./App.css";
import { useState } from "react";
import { Counter } from "./components/Counter";
function App() {
  const [contador, setContador] = useState({
    left: 0,
    right: 0,
    clicks: 0,
    mensajes: "Mensaje en el estado",
  });
  const [click, setClick] = useState([]);

  const handleClickLeft = () => {
    const newContador = {
      ...contador,
      left: contador.left + 1,
      mensajes: "Hola munndo",
    };
    setContador(newContador);
    setClick((preventElement) => {
      return [...preventElement, "L"];
    });
  };
  const handleClickRight = () => {
    const newContador = {
      ...contador,
      right: contador.right + 1,
      mensajes: "Hola munndo al reves",
    };
    setContador(newContador);
    setClick((preventElement) => {
      return [...preventElement, "R"];
    });
  };
  const handleReset = () => {
    const reset = {
      left: 0,
      right: 0,
      mensajes: "Se reseteo los dos contadores",
    };
    setContador(reset);
  };
  return (
    <div className="App">
      <Counter number={contador.left} />
      <button onClick={handleClickLeft}>Incrementar izquierda</button>
      <Counter number={contador.right} />
      <button onClick={handleClickRight}>Incrementar derecha</button>
      <br />
      <button onClick={handleReset}>Reset</button>
      <h3>{contador.mensajes}</h3>
      <h2>Contador de clicks y lados</h2>
      <h2>{click.join("-")}</h2>
    </div>
  );
}

export default App;
