import { useState } from "react";

export function EditModal({ item, onSaveEdit, onClose }) {
  const [text, setText] = useState(item.text);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedText = text.trim();
    onSaveEdit(item.id, trimmedText);
  }
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96 ">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <h2 className="text-center text-black text-xl">Edit Item</h2>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-2 rounded-md border border-gray-300"
          />

          <div className="flex gap-3 justify-center">
            <button
              className="bg-gray-300 px-6 py-2 rounded-md  cursor-pointer"
              type="submit"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded-md cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
