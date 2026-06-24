import "./ControlButtons.css";

export default function ControlButtons({
  onStart,
  onPause,
  onReset,
  isActive,
  isPaused,
}) {
  return (
    <div className="control-buttons">
      {!isActive && isPaused && (
        <button onClick={onStart} className="btn btn-one">
          start
        </button>
      )}

      {isActive && (
        <div className="control-btns">
          <button onClick={onReset} className="btn btn-one">
            Reset
          </button>

          <button onClick={onPause} className="btn btn-one">
            {isPaused ? "Resume" : "Pause"}
          </button>
        </div>
      )}
    </div>
  );
}
