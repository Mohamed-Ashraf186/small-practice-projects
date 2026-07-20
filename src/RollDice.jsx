export default function RollDice({ onRollDice }) {
  return (
    <button
      onClick={onRollDice}
      className="bg-white rounded-2xl p-4 flex justify-center text-center"
    >
      Roll Dice!
    </button>
  );
}
