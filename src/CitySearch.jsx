import { useEffect, useState } from "react";

const KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function CitySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [results, setResults] = useState([]);
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
    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(
          `${BASE_URL}/search.json?key=${KEY}&q=${debouncedTerm}`,
          { signal: controller.signal },
        );
        const data = await response.json();
        setResults(data);
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
  }, [debouncedTerm]);

  const visibleResults = debouncedTerm.trim() ? results : [];
  console.log(visibleResults);

  return (
    <div className="flex justify-center gap-2 mt-3">
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
    </div>
  );
}
