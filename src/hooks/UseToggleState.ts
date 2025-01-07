import { useState } from "react";

export const UseToggleState = (initialState: boolean = false) => {
  const [state, setState] = useState(initialState);

  const toggleState = () => setState((prev) => !prev);
  const setTrue = () => setState(true);
  const setFalse = () => setState(false);

  return { state, toggleState, setTrue, setFalse };
};
