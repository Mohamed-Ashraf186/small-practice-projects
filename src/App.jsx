import { useState } from "react";
import CitySearch from "./CitySearch";
import WeatherResult from "./WeatherResult";

// const KEY = "b084405729494e5182d123840261710";
// const Base_URL = "http://api.weatherapi.com/v1";

function App() {
  // const [weather, setWeather] = useState(null);

  return (
    <div className="flex flex-col items-center gap-6 ">
      <CitySearch />
      <WeatherResult />
    </div>
  );
}

export default App;
