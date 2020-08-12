import React, { createContext, useReducer,} from 'react'

export const ThemeContext = createContext()

const darkTheme = {
    mainBackground: "#232931",
    textColor: "#FEE715FF"
}

const lightTheme = {
    mainBackground: "white",
    textColor: "black"
}



function ThemeReducer(state, action) {
    switch (action.type) {
        case "CHANGE_THEME": {
            return { ...state, isDarkTheme: action.payload }
        }
        default: {
            return state;
        }
    }
}

export const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, { isDarkTheme: true })

    let ui = state.isDarkTheme ? darkTheme : lightTheme 

    const changeThemeAction = (bool) => {
        console.log(bool)
        dispatch({
            type: "CHANGE_THEME",
            payload: bool
        })
    }

    return <ThemeContext.Provider value={{
        state,
        changeThemeAction, 
        ui
    }}>
        {children}
    </ThemeContext.Provider>
}