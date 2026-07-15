import { useState } from "react";
import ItemInput from "./ItemInput";
import ItemList from "./ItemList";
import { EditModal } from "./EditModal";
import { useTodos } from "./useTodos";

function App() {
  const { items, addItem, deleteItem, toggleItem, editItem } = useTodos();

  const [editingItem, setEditingItem] = useState(null);

  const onSaveEdit = (id, newText) => {
    editItem(id, newText);
    setEditingItem(null);
  };

  return (
    <div className="App justify-center p-4 max-w-[600px] mx-auto">
      <h1 className="text-3xl font-bold border-b w-full text-center pb-6 border-gray-400">
        TODO LIST
      </h1>

      <div className="flex flex-col gap-4 p-4">
        <ItemInput onAddItem={addItem} />
        <ItemList
          onDeleteItem={deleteItem}
          items={items}
          onEditItem={setEditingItem}
          onToggleItem={toggleItem}
        />

        {editingItem && (
          <EditModal
            item={editingItem}
            onSaveEdit={onSaveEdit}
            onClose={() => setEditingItem(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
