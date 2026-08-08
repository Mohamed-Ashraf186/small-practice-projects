import { useState } from "react";
import Coin from "./Coin";

function App() {
  const [index, setIndex] = useState(null);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);

  function handleCoinFlip() {
    const result = Math.floor(Math.random() * 2);
    setIndex(result);
    result === 0 ? setHeads((h) => h + 1) : setTails((t) => t + 1);
  }

  return (
    <div className="app">
      <h1>Let's flip a coin</h1>
      <Coin i={index} heads={heads} tails={tails} />
      <button
        onClick={handleCoinFlip}
        className="bg-white text-gray-600 px-3 py-1 rounded-md mt-6 cursor-pointer "
      >
        Flip Me!
      </button>
    </div>
  );
}

export default App;
