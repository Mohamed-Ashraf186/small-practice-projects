export default function StrengthBar({ progress }) {
  return (
    <div className="h-1 bg-gray-200 rounded-sm overflow-hidden">
      <div
        className="h-1  rounded-sm transition-all duration-300"
        style={{
          width: `${progress}%`,
          backgroundColor:
            progress === 100 ? "green" : progress > 50 ? "orange" : "red",
        }}
      ></div>
    </div>
  );
}
