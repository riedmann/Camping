import React, { createContext, useReducer } from "react";

export const GlobalStateContext = createContext();
export const GlobalDispachContext = createContext();

const initialState = {
  products: [],
  name: "hans",
};
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.value,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: state.products.concat(action.value),
      };

    default:
      break;
  }
}

export default function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispachContext.Provider value={dispatch}>
        {children}
      </GlobalDispachContext.Provider>
    </GlobalStateContext.Provider>
  );
}
