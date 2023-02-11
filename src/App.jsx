import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const handleScore = () => {
    setScore(score + 1);
    // setScore(score++);
  };

  return (
    <div className="App">
      {score > 0 && count > 0 && <p>Score and Count are no longer 0!</p>}
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <hr />
      <button onClick={handleScore}>score = {score}</button>
    </div>
  );
}

export default App;
