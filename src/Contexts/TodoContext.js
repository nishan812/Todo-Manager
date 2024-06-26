import { createContext,useContext } from "react";

export const TodoContext = createContext()

export const TodoContextProvider = TodoContext.Provider

export function useTodoContext(){
    return useContext(TodoContext)
}