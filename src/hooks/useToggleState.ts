import { useState } from "react";

export const useToggleState = (initialState: boolean = false) => {
  const [state, setState] = useState(initialState);

  const toggleState = () => setState((prev) => !prev);
  const setTrue = () => setState(true);
  const setFalse = () => setState(false);

  return { state, toggleState, setTrue, setFalse };
};
