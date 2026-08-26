import CheckList from "./CheckList";
import PasswordInput from "./PasswordInput";

function App() {
  return (
    <div className="mx-auto">
      <div className="max-w-150 border border-gray-600 px-10 py-5 rounded-2xl">
        <PasswordInput />
        <CheckList />
      </div>
    </div>
  );
}

export default App;
