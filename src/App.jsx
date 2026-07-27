import Die from "./Die";
import RollDice from "./RollDice";
import { useDice } from "./useDice";

function App() {
  const { handleRollDice, die1, die2 } = useDice();

  return (
    <div className="app py-15 flex flex-col gap-10">
      <div className="flex gap-20 justify-center">
        <Die value={die1} />
        <Die value={die2} />
      </div>
      <RollDice onRollDice={handleRollDice} />
    </div>
  );
}

export default App;
