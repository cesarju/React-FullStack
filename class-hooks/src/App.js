import "./App.css";
import { useState } from "react";
import { Counter } from "./components/Counter";
function App() {
  const [contador, setContador] = useState(0);
  const handlePlus = () => {
    setContador(contador + 1);
  };
  const handleMinus = () => {
    setContador(contador - 1);
    /*  setContador((contador) => {
      return contador - 1;
    }); */
  };
  const handleReset = () => {
    setContador(0);
  };
  return (
    <div className="App">
      <Counter number={contador} />
      <button onClick={handlePlus}>Incrementar</button>
      <button onClick={handleMinus}>Decrementar</button>
      <button onClick={handleReset}>Decrementar</button>
    </div>
  );
}

export default App;
