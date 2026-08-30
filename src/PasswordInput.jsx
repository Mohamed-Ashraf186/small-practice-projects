import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useState } from "react";
export default function PasswordInput({ password, setPassword }) {
  const [eyeOpen, setEyeOpen] = useState(false);
  return (
    <div className="flex flex-col items-start mt-6 gap-2">
      <label htmlFor="password" className="text-sm">
        Password
      </label>
      <div className="flex rounded justify-between focus-within:outline-2 focus-within:ring-2  focus-within:outline-blue-500 max-w-96 px-2.5 py-1.5 border gap-1   border-gray-700">
        <input
          type={eyeOpen ? "text" : "password"}
          placeholder="Enter a password"
          className="outline-none focus:outline-none focus:ring-0"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setEyeOpen((prev) => !prev)}
        >
          {eyeOpen ? <EyeOff /> : <Eye />}
        </button>
      </div>
    </div>
  );
}
