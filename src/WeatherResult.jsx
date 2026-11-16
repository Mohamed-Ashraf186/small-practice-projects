export default function WeatherResult({ weather }) {
  if (!weather?.location) {
    return (
      <div className="border flex flex-col items-center justify-center border-gray-600 rounded-md w-100 h-70">
        <p>Search a city to see the weather</p>
      </div>
    );
  }
  const { current, location } = weather;
  return (
    <div className="border flex flex-col items-center justify-center border-gray-600 rounded-md w-100 h-70">
      <p className="text-grey-600">
        {location.name},{location.country}
      </p>
      <p className="text-grey-600">{current.temp_c}°C</p>
      <div className="text-grey-600 flex items-center justify-center ">
        <div className="w-10 h-10">
          <img src={current.condition.icon} alt={current.condition.text} />
        </div>
        <p className="text-grey-600">{current.condition.text}</p>
      </div>
      <p className="text-grey-600">
        {current.wind_kph} km/h, {current.humidity}%
      </p>
    </div>
  );
}
