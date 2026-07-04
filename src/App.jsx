import ItemInput from "./ItemInput";
import ItemList from "./ItemList";
function App() {
  return (
    <div className="App justify-center p-4">
      <h1 className="text-3xl font-bold border-b w-full text-center pb-6 border-white">
        TODO LIST
      </h1>

      <ItemInput />
      <ItemList />
    </div>
  );
}

export default App;
