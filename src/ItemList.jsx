export default function ItemList({
  items,
  onDeleteItem,
  onEditItem,
  onToggleItem,
}) {
  return (
    <div className="item-list flex flex-col">
      {items.length === 0 ? (
        <p>No Tasks Yet!</p>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            className="item flex border border-gray-400 justify-between bg-gray-300 px-4 py-2"
          >
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => onToggleItem(item.id)}
            />
            <p
              className={`text-sm ${item.done ? "line-through text-gray-400" : ""}`}
            >
              {item.text}
            </p>
            <div className="flex gap-3">
              <button
                className="bg-white text-black px-3 py-1.5 rounded-md text-[16px] cursor-pointer"
                onClick={() => onDeleteItem(item.id)}
              >
                Delete
              </button>
              <button
                className="bg-white px-3 py-1.5 text-black rounded-md text-[16px] cursor-pointer"
                onClick={() => onEditItem(item)}
              >
                Edit
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
