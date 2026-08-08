// import { useState } from "react";

const COIN_FACES = [
  { label: "Heads", img: "/src/assets/SHalfDollarObverse2016head-300x300.jpg" },
  { label: "Tails", img: "/src/assets/tails-200x200.jpg" },
];

export default function Coin({ i, heads, tails }) {
  const totalFlips = heads + tails;
  return (
    <div className="coin flex-col flex items-center gap-5 justify-center">
      {i !== null ? (
        <>
          <div className="h-50 w-50">
            <img
              src={COIN_FACES[i].img}
              alt={COIN_FACES[i].label}
              className="w-full h-full"
            />
          </div>
          <p>
            Out of {totalFlips} flips, there have been {heads} heads and {tails}{" "}
            tails
          </p>
        </>
      ) : (
        <p>Click on the flip me button to begin</p>
      )}
    </div>
  );
}
