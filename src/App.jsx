import { useState } from "react";
import CheckList from "./CheckList";
import PasswordInput from "./PasswordInput";

function App() {
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState(false);

  const rules = {
    length: /^.{8,}$/.test(password),
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    specialChar: /[^A-Za-z0-9]/.test(password),
  };
  return (
    <div className="mx-auto">
      <div className="max-w-150 border border-gray-600 px-10 py-5 rounded-2xl">
        <PasswordInput
          password={password}
          setPassword={setPassword}
          setTouched={setTouched}
        />
        <CheckList rules={rules} touched={touched} />
      </div>
    </div>
  );
}

export default App;
