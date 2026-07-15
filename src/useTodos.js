import { useEffect, useState } from "react";

export function useTodos() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const deleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems((items) =>
      items.map((i) => (i.id === id ? { ...i, done: !i.done } : i)),
    );
  };

  const editItem = (id, newText) => {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, text: newText } : item)),
    );
  };

  return { items, setItems, addItem, deleteItem, editItem, toggleItem };
}
