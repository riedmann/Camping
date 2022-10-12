import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispachContext = React.createContext()

const initialState = {
  theme: "light",
  products:[]
}

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      }
    }
    case "ADD_PRODUCT":{
      return {
        ...state,
        products: state.products.concat(action.value)
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispach] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispachContext.Provider value={dispach}>
        {children}
      </GlobalDispachContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider