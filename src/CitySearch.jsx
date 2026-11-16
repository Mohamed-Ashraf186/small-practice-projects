import { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";

const KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function CitySearch({ setResults }) {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [debouncedTerm, setDebouncedTerm] = useState("");
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const delayTimer = setTimeout(() => {
  //     setDebouncedTerm(searchTerm);
  //   }, 500);
  //   return () => clearTimeout(delayTimer);
  // }, [searchTerm]);

  // useEffect(() => {
  //   if (!debouncedTerm.trim()) {
  //     return;
  //   }

  //   const controller = new AbortController();

  //   async function fetchData() {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(
  //         `${BASE_URL}/search.json?key=${KEY}&q=${debouncedTerm}`,
  //         { signal: controller.signal },
  //       );
  //       const data = await response.json();
  //       setResults(data);
  //       console.log(data);
  //     } catch (error) {
  //       if (error.name !== "AbortError") {
  //         console.error("Fetch error:", error);
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchData();

  //   return () => controller.abort();
  // }, [debouncedTerm, setResults]);

  const [selectedValue, setSelectedValue] = useState(null);

  async function loadOptions(inputValue) {
    if (!inputValue.trim) return [];
    const response = await fetch(
      `${BASE_URL}/search.json?key=${KEY}&q=${inputValue}`,
    );
    const data = await response.json();

    return (data ?? []).map((city) => ({
      value: city.id,
      label: `${city.name}, ${city.country}`,
    }));
  }

  function handleChange(selectedOption) {
    setSelectedValue(selectedOption ? selectedOption.value : null);
  }

  useEffect(() => {
    if (!selectedValue) return;
    const controller = new AbortController();
    async function fetchCurrentData() {
      try {
        const res = await fetch(
          `${BASE_URL}/current.json?key=${KEY}&q=id:${selectedValue}`,
          { signal: controller.signal },
        );
        const data = await res.json();
        setResults(data);
        console.log(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      }
    }
    fetchCurrentData();
  }, [selectedValue]);

  return (
    <div className="flex justify-center gap-2 mt-3 relative">
      {/* <input
        type="text"
        placeholder="Enter a city"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-600  rounded-md px-2 text-sm"
      /> */}
      <AsyncSelect
        loadOptions={loadOptions}
        cacheOptions
        className="w-60"
        onChange={handleChange}
        styles={{
          control: (base, state) => ({
            ...base,
            backgroundColor: "#111827",
            borderColor: state.isFocused ? "#9ca3af" : "#4b5563",
            color: "white",
            minHeight: 36,
            fontSize: 14,
            boxShadow: "none",
          }),
          input: (base) => ({ ...base, color: "white" }),
          singleValue: (base) => ({ ...base, color: "white" }),
          placeholder: (base) => ({ ...base, color: "#9ca3af" }),
          menu: (base) => ({
            ...base,
            backgroundColor: "#111827",
            border: "1px solid #4b5563",
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#374151" : "#111827",
            color: "white",
            fontSize: 12,
          }),
        }}
      />
      <button className="px-3 py-1 border border-gray-500 rounded-md text-sm bg-black text-white">
        Search
      </button>

      {/* {results.length ? <SuggestionDropdown weather={results} /> : null} */}
    </div>
  );
}

// function SuggestionDropdown({ weather }) {
//   return (
//     <div className="flex flex-col gap-3 items-start p-3 border right-0 border-gray-500 w-[250px] h-[200px] overflow-y-auto absolute bg-gray-900 left-0 top-7">
//       {weather.map((res) => (
//         <div
//           key={res.id}
//           className="hover:bg-gray-700 px-2 py-1 cursor-pointer w-full text-left"
//         >
//           <p className="text-white text-xs truncate">
//             {res.name}, {res.country}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }
