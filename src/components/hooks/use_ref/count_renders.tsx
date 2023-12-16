import { useState, useRef } from "react";

export const CountRenders = () => {
  const [value, setValue] = useState("");
  const count = useRef(1);

  const handleOnChange = (event: string) => {
    setValue(event);
    count.current++;
  };

  return (
    <>
      <h2>useRef</h2>

      <input
        value={value}
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
      />

      <p>{value}</p>
      <p>I have rendered {count.current} times</p>
    </>
  );
};
