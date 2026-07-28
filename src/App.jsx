import { useState } from "react";
import Coin from "./Coin";

function App() {
  const [index, setIndex] = useState(null);

  function handleCoinFlip() {
    // i have 2 images one heads and one tails.. when press the flip me button I need it to give one of those two options.. so it will choose randomly from just one of those two..
    // so maybe I can have an array of two objects.. one for heads and one for tails.. each one will have its own id.. one will have heads as an id and the other one will have tails
    // and each object will also have the image path.. so when the button is pressed we use the random method between 1 and 2 which and then display the image in the object that matches that id maybe usin .find or something
    setIndex(Math.floor(Math.random() * 2) + 1);
  }

  return (
    <div className="app">
      <h1>Let's flip a coin</h1>
      <Coin i={index} />
      <button
        onClick={handleCoinFlip}
        className="bg-white text-gray-600 px-3 py-1 rounded-md mt-6 "
      >
        Flip Me!
      </button>
    </div>
  );
}

export default App;
