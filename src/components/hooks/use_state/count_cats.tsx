import { useState } from "react";

export function CountCats() {
  const [countCats, setCountCat] = useState<number>(0);
  const cats: string[] = ["🐈"];

  return (
    <>
      <h2>useState</h2>

      <p>{Array(countCats).fill(cats)}</p>

      <button
        onClick={() => {
          setCountCat(countCats + 1);
        }}
      >
        There are {countCats} cats 🥳
      </button>
    </>
  );
}
