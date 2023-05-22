import React, { useMemo, useState } from "react";

const MemoComponent = () => {
  const handleUpgrade = (number) => {
    for (let index = 0; index < 1000000000; index++) {
      number += 1;
    }
    return number;
  };
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  const activeText = {
    color: active ? "green" : "red",
  };

  const handleActive = () => {
    setActive(!active);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const upgrade = useMemo(() => handleUpgrade(count), [count])

  return (
    <div>
      <h1 style={activeText}>Styled Text</h1>
      <h1>Count: {upgrade}</h1>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleActive}>active</button>
    </div>
  );
};

export default MemoComponent;
