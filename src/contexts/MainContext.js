import React, { createContext, useReducer,} from 'react'
import { useHistory } from "react-router-dom";

export const MainContext = createContext()




function MainReducer(state, action) {
    switch (action.type) {
        case "CHANGE_THEME": {
            return { ...state, theme: action.payload }
        }
        default: {
            return state;
        }
    }
}

export const MainContextProvider = ({ children }) => {
    let history = useHistory();

    const [state, dispatch] = useReducer(MainReducer, { loaded: false })
    const signIn = (username, password) => {
        console.log(username, password);
        //do some validations here
        history.push("/main");
    }

    return <MainContext.Provider value={{
        state, signIn
    }}>
        {children}
    </MainContext.Provider>
}