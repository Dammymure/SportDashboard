import React, { createContext, useContext, useState } from 'react'
 
const StateContext = createContext()

const initialState = {
 // chat: false,
 // cart: false,
 // userProfile: false,
 // notification: false,
}

export const ContextProvider = ({ children }) =>{
 const [activeMenu, setActiveMenu] = useState(true);
 const [mode, setMode] = useState(true)
 return(
  <StateContext.Provider
  value={{
    activeMenu, setActiveMenu,
    mode, setMode
  }}
  >
   {children}
  </StateContext.Provider>
 )
}

export const useStateContext = () => useContext(StateContext)