import { X, Check } from "lucide-react";

const RULES = [
  { key: "length", label: "At least 8 characters" },
  { key: "uppercase", label: "One uppercase letter" },
  { key: "lowercase", label: "One lowercase letter" },
  { key: "number", label: "One number" },
  { key: "specialChar", label: "One special character" },
];

export default function CheckList({ rules, touched }) {
  return (
    <div>
      {RULES.map(({ key, label }) => (
        <div key={key} className="flex gap-1">
          <div
            className={
              touched
                ? rules[key]
                  ? "text-green-500"
                  : "text-red-500"
                : "text-transparent"
            }
          >
            {rules[key] ? (
              <Check className="size-3" />
            ) : (
              <X className="size-3" />
            )}
          </div>
          <p className="text-sm">{label}</p>
        </div>
      ))}
    </div>
  );
}
