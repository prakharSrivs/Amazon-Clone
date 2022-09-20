import React, { createContext, useContext, useReducer } from "react";
// Create a Context which is acting as a Data  Layer
export const StateContext = createContext();

//Provider Component to the access the data from the context
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>    
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext); 
