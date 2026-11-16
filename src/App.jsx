import { useState } from "react";
import CitySearch from "./CitySearch";
import WeatherResult from "./WeatherResult";

function App() {
  const [weather, setWeather] = useState({});

  return (
    <div className="flex flex-col items-center gap-6 ">
      <CitySearch setResults={setWeather} />
      <WeatherResult weather={weather} />
    </div>
  );
}

export default App;
