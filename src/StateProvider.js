import React, { useContext,createContext, useReducer } from "react"

//prepare Data Layer
export const StateContext=createContext();

export const StateProvider=(({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
));

//hook which allous to pull info from data layer
export const useStateValue=()=>useContext(StateContext);