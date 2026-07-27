import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

const DICE_ICONS = [
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
];

export default function Die({ value }) {
  return (
    <div>
      <h3 className="text-6xl" role="img" aria-label={`Die showing ${value}`}>
        <FontAwesomeIcon icon={DICE_ICONS[value - 1]} aria-hidden="true" />
      </h3>
    </div>
  );
}
