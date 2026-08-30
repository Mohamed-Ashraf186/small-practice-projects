import { X } from "lucide-react";
import { Check } from "lucide-react";

export default function CheckList({ rules }) {
  return (
    <div className="mt-4">
      <div className="flex gap-1">
        {rules.length ? (
          <div className="text-green-500 flex items-center">
            <Check className="size-3" />
          </div>
        ) : (
          <div className="text-red-500 flex items-center">
            <X className="size-3" />
          </div>
        )}

        <p className="text-sm">At least 8 characters</p>
      </div>

      <div className="flex gap-1">
        {rules.uppercase ? (
          <div className="text-green-500 flex items-center">
            <Check className="size-3" />
          </div>
        ) : (
          <div className="text-red-500 flex items-center">
            <X className="size-3" />
          </div>
        )}
        <p className="text-sm">One uppercase letter</p>
      </div>

      <div className="flex gap-1">
        {rules.lowercase ? (
          <div className="text-green-500 flex items-center">
            <Check className="size-3" />
          </div>
        ) : (
          <div className="text-red-500 flex items-center">
            <X className="size-3" />
          </div>
        )}
        <p className="text-sm">One lowercase letter</p>
      </div>

      <div className="flex gap-1">
        {rules.number ? (
          <div className="text-green-500 flex items-center">
            <Check className="size-3" />
          </div>
        ) : (
          <div className="text-red-500 flex items-center">
            <X className="size-3" />
          </div>
        )}
        <p className="text-sm">One number</p>
      </div>

      <div className="flex gap-1">
        {rules.specialChar ? (
          <div className="text-green-500 flex items-center">
            <Check className="size-3" />
          </div>
        ) : (
          <div className="text-red-500 flex items-center">
            <X className="size-3" />
          </div>
        )}
        <p className="text-sm">One special character</p>
      </div>
    </div>
  );
}
