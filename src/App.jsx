import { useState } from "react";
import "./App.scss";

const _colors = ["red", "green", "blue", "purple"];
function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [color, setColor] = useState([_colors]);

  const handleCount = () => {
    setCount(count + 1);
    // console.log(count);
  };
  const handleScore = () => {
    // score += 1;
    const _score = score + 1;
    // console.log("score1:", score);
    setScore(_score);
    // console.log("score2:", score);

    // setScore(score++);
    if (_score > 5) {
      setCount(0);
    }
    console.log("_score:", _score);
  };

  const handleAddColor = () => {
    const _color = [...color];
    _color.push("yellow");
    setColor(_color);
    // color.push("navy");
    // setColor([...color]);
    console.log(color.length);
    // if (color.length === 5) {
    //   {
    //     green;
    //   }
    // }
  };
  // score.length > 0 &&
  return (
    <div>
      <div
        className="App"
        style={score === 5 ? { background: "red" } : { background: "green" }}
      >
        {score > 0 && count > 0 && <p>Score and Count are no longer 0!</p>}
        {/* {score > 5 && setCount(count - count)} */}
        {/* {score > 5 && setCount(0)} */}
        <button onClick={handleCount}>count is {count}</button>
        <hr />
        <button onClick={handleScore}>score = {score}</button>
        <hr />
        {color.map((c, i) => (
          <div key={i}>{c}</div>
        ))}
        <hr />
        <button onClick={handleAddColor}>Add a new Color</button>
      </div>
    </div>
  );
}

export default App;
