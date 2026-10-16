export default function CitySearch() {
  return (
    <div className="flex justify-center gap-2 mt-3">
      <input
        type="text"
        placeholder="Enter a city"
        className="border border-gray-600  rounded-md px-2 text-sm"
      />
      <button className="px-3 py-1 border border-gray-500 rounded-md text-sm bg-black text-white">
        Search
      </button>
    </div>
  );
}
