import { useState } from "react";
import CheckList from "./CheckList";
import PasswordInput from "./PasswordInput";
import StrengthBar from "./StrengthBar";

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

  const rulesValuesArr = Object.values(rules);
  const count = rulesValuesArr.filter((value) => value === true).length;
  const percentage = Math.round((count / rulesValuesArr.length) * 100);

  return (
    <div className="mx-auto">
      <div className="max-w-150 border border-gray-600 px-10 py-5 rounded-2xl flex flex-col gap-4 ">
        <PasswordInput
          password={password}
          setPassword={setPassword}
          setTouched={setTouched}
          touched={touched}
        />

        <StrengthBar progress={percentage} />
        <CheckList rules={rules} touched={touched} />
      </div>
    </div>
  );
}

export default App;
