import { useState } from "react";
import ItemInput from "./ItemInput";
import ItemList from "./ItemList";
function App() {

  const [items,setItems] = useState([]);


  console.log(items);
  const addItem = (item)=>{
    setItems(items=> [...items,item]);
  }

  return (
    <div className="App justify-center p-4 max-w-[600px] mx-auto">

      <h1 className="text-3xl font-bold border-b w-full text-center pb-6 border-gray-400">
        TODO LIST
      </h1>

      <div className="flex flex-col gap-4 p-4">
        <ItemInput onAddItem={addItem} />
        <ItemList />
      </div>
    </div>
  );
}

export default App;
