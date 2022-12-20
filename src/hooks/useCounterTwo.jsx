import React, { useState } from "react";

const useCounterTwo = (defaultValue, currentState, max, min) => {
  console.log(defaultValue);
  const [state, setState] = useState(defaultValue);
  function changeInc() {
    if (state + currentState <= max) {
      setState(state + currentState);

      return;
    }
    return alert("Вы достигли максимального числа");
  }

  function changeDec() {
    if (state - currentState >= min) {
      setState(state - currentState);
      return;
    }
    return alert("Вы достигли минимального числа");
  }
  function reset() {
    setState(defaultValue);
  }

  return {
    changeInc,
    changeDec,
    state,
    reset,
  };
};

export default useCounterTwo;
