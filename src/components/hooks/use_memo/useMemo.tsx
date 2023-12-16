import { useState, useMemo } from "react";
export const MemoExample = () => {
  console.log("Rendering component...");
  const [numberObj, setNumberObj] = useState({ input: 0 });

  //Use state for managing user input
  const [userInput, setUserInput] = useState("");

  const doubleNumber = useMemo(
    () => slowFunction(numberObj.input),
    [numberObj.input]
  );

  const handleButtonClick = () => {
    const update = Number(userInput);
    setNumberObj({ input: update });
  };
  return (
    <>
      <h2>useMemo</h2>
      <input
        value={userInput}
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleButtonClick}>Double Number</button>
      <p className="use-memo__text">{doubleNumber}</p>
    </>
  );
};
function slowFunction(num: number) {
  console.log("calling slow function... 🐌");
  for (let i = 0; i <= 1000000000; i++) {
    // ⏰
  }
  const result = num * 2;
  console.log(`result: ${result}`);
  return result;
}
