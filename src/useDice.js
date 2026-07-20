import { useState } from "react";

export function useDice() {
  const [die1, setDie1] = useState(1);
  const [die2, setDie2] = useState(1);

  function handleRollDice() {
    setDie1(Math.floor(Math.random() * 6) + 1);
    setDie2(Math.floor(Math.random() * 6) + 1);
  }

  return { handleRollDice, die1, die2 };
}
