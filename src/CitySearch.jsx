import { useEffect, useState } from "react";

const KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function CitySearch({ results, setResults }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);
    return () => clearTimeout(delayTimer);
  }, [searchTerm]);

  useEffect(() => {
    if (!debouncedTerm.trim()) {
      return;
    }

    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/search.json?key=${KEY}&q=${debouncedTerm}`,
          { signal: controller.signal },
        );
        const data = await response.json();
        setResults(data);
        console.log(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
  }, [debouncedTerm, setResults]);

  // const visibleResults = debouncedTerm.trim() ? results : [];
  // console.log(visibleResults);

  return (
    <div className="flex justify-center gap-2 mt-3 relative">
      <input
        type="text"
        placeholder="Enter a city"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-600  rounded-md px-2 text-sm"
      />
      <button className="px-3 py-1 border border-gray-500 rounded-md text-sm bg-black text-white">
        Search
      </button>

      {results.length ? <SuggestionDropdown weather={results} /> : null}
    </div>
  );
}

function SuggestionDropdown({ weather }) {
  return (
    <div className="flex flex-col gap-3 items-start p-3 border right-0 border-gray-500 w-[250px] h-[200px] overflow-y-auto absolute bg-gray-900 left-0 top-7">
      {weather.map((res) => (
        <div
          key={res.id}
          className="hover:bg-gray-700 px-2 py-1 cursor-pointer w-full text-left"
        >
          <p className="text-white text-xs truncate">
            {res.name}, {res.country}
          </p>
        </div>
      ))}
    </div>
  );
}
