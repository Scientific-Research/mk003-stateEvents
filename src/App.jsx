import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
    // console.log(count);
  };
  const handleScore = () => {
    setScore(score + 1);
    // setScore(score++);
    if (score > 5) {
      setCount(0);
    }
    console.log(score);
  };

  return (
    <div className="App">
      {/* {score > 0 && count > 0 && <p>Score and Count are no longer 0!</p>} */}
      {/* {score > 5 && setCount(count - count)} */}
      {/* {score > 5 && setCount(0)} */}
      <button onClick={handleCount}>count is {count}</button>
      <hr />
      <button onClick={handleScore}>score = {score}</button>
    </div>
  );
}

export default App;
