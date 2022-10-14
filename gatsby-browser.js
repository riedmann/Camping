import React from "react"
import GlobalContextProvider from "./src/context/GlobalContextProvider"

export const wrapRootElement = ({ element }) => {
  console.log("inside");
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}