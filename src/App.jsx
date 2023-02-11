import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(4);
  const [score, setScore] = useState(7);

  const handleScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <hr />
      <button onClick={handleScore}>score = {score}</button>
    </div>
  );
}

export default App;
