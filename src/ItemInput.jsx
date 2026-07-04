import { useState } from "react";

export default function ItemInput({onAddItem}) {
  const [inputValue,setInputValue] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const item = {id: crypto.randomUUID(), text: trimmed, done: false}
    onAddItem(item);
    setInputValue("");
  }
  return (
    <form onSubmit={handleSubmit} className="item-input flex flex-col">
      <input value={inputValue} onChange={e=> setInputValue(e.target.value)} type="text" placeholder="Add item ..." className="p-2 rounded-md border border-gray-300"/>
      <button className="mr-auto mt-2 bg-black text-white py-1 px-2 rounded-md hover:bg-gray-700 transition-colors cursor-pointer">Add</button>
    </form>
  );
}
