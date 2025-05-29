import { useState } from "react";
import Button from "../_components/Button";

export default function Calculator() {
  const [answer, setAnswer] = useState("");
  const [symbol, setSymbol] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  function handleNumberClick(value) {
    if (a && b) {
      return;
    }

    if (!a) {
      setA(value);
    } else {
      setB(value);
    }

    return;
  }

  function handleDelete() {
    if (answer) {
      return;
    }
    if (b) {
      setB("");
      return;
    }
    if (a) {
      setA("");
      return;
    }
  }

  function handleOperation(operation) {
    if (!a || !b) {
      return;
    }
    switch (operation) {
      case "add":
        setAnswer(a + b);
        setSymbol("+");
        break;
      case "subtract":
        setAnswer(a - b);
        setSymbol("-");
        break;
      case "multiply":
        setAnswer(a * b);
        setSymbol(`X`);
        break;
      case "divide":
        setAnswer(a / b);
        setSymbol("/");
        break;
    }

    return answer;
  }

  function handleClear() {
    setAnswer("");
    setA("");
    setB("");
    setSymbol("");
  }

  return (
    <div>
      <div className="w-[50%] mx-auto my-5 border flex justify-evenly">
        <span className="border">{a}</span>
        <span>{symbol}</span>
        <span className="border">{b}</span>
        <span>=</span>
        <span>{answer}</span>
      </div>
      <div className="grid grid-cols-3 w-[50%] mx-auto text-center border">
        <Button
          onClick={() => {
            handleNumberClick(1);
          }}
        >
          1
        </Button>
        <Button
          onClick={() => {
            handleNumberClick(2);
          }}
        >
          2
        </Button>
        <Button
          onClick={() => {
            handleNumberClick(3);
          }}
        >
          3
        </Button>
        <Button
          onClick={() => {
            handleNumberClick(4);
          }}
        >
          4
        </Button>
        <Button
          onClick={() => {
            handleNumberClick(5);
          }}
        >
          5
        </Button>
        <Button
          onClick={() => {
            handleNumberClick(6);
          }}
        >
          6
        </Button>
        <Button
          onClick={() => {
            handleNumberClick(7);
          }}
        >
          7
        </Button>
        <Button
          onClick={() => {
            handleNumberClick(8);
          }}
        >
          8
        </Button>
        <Button
          onClick={() => {
            handleNumberClick(9);
          }}
        >
          9
        </Button>
        <Button
          className="col-span-3"
          onClick={() => {
            handleNumberClick(0);
          }}
        >
          0
        </Button>
      </div>
      <div className="grid grid-cols-4 w-[50%] mx-auto text-center">
        <Button
          onClick={() => {
            handleOperation("add");
          }}
        >
          add
        </Button>
        <Button
          onClick={() => {
            handleOperation("subtract");
          }}
        >
          subtract
        </Button>
        <Button
          onClick={() => {
            handleOperation("multiply");
          }}
        >
          multiply
        </Button>
        <Button
          onClick={() => {
            handleOperation("divide");
          }}
        >
          divide
        </Button>
        <Button className="col-span-2" onClick={handleDelete}>
          delete
        </Button>
        <Button className="col-span-2" onClick={handleClear}>
          clear
        </Button>
      </div>
    </div>
  );
}
