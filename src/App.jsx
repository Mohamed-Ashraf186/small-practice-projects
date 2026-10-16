import CitySearch from "./CitySearch";
import WeatherResult from "./WeatherResult";

function App() {
  return (
    <div className="flex flex-col items-center gap-6 ">
      <CitySearch />
      <WeatherResult />
    </div>
  );
}

export default App;
