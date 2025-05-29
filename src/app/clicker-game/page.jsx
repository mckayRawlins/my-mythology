"use client";

import Button from "../_components/Button";
import { useState } from "react";
import Calculator from "../_components/Calculator";

export default function Page() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <Calculator />
      {/* <p>{count}</p>
      <Button onClick={handleCount}>click me</Button> */}
    </div>
  );
}
