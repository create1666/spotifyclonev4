import { createContext, useReducer, useContext } from "react";

export const stateContext = createContext()

export const StateProvider = ({initialState, reducer, children} ) => (
  <stateContext.provider value={useReducer(reducer, initialState)}>{children}</stateContext.provider>
)


export const useStateValue = () => useContext(stateContext)