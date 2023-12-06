import { createContext, useReducer } from "react";
import { clientReducer, initialState } from "../store/reducers/clientListReducer";

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
    const [state, dispatch] = useReducer(clientReducer, initialState);

    return(
        <ClientContext.Provider value={{ state, dispatch }}>
            {children}
        </ClientContext.Provider>
    )
}