import React from "react";
import useCounter from "./hooks/useCounter";
import useCounterTwo from "./hooks/useCounterTwo";
let initialValue = 9;
let defaultValue = 0;
function App() {
  const { changeNumberInc, changeNumberDec, count, resetNumber } = useCounter(
    initialValue,
    5,
    30,
    6
  );

  const { changeInc, changeDec, state, reset } = useCounterTwo(
    defaultValue,
    1,
    20,
    4
  );

  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button onClick={changeNumberInc}>Plus</button>
        <button onClick={changeNumberDec}>Minus</button>
        <button onClick={resetNumber}>Reset</button>
      </div>
      <div>
        <h1>{state}</h1>
        <button onClick={changeInc}>Increment</button>
        <button onClick={changeDec}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
