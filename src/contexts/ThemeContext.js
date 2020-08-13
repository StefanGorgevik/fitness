import React, { createContext, useReducer,} from 'react'

export const ThemeContext = createContext()

const darkTheme = {
    mainBackground: "#232931",
    textColor: "#FEE715FF",
    buttonBackground: "#393E46"
}

const lightTheme = {
    mainBackground: "#E7EBE0FF",
    textColor: "#28334AFF",
    buttonBackground: "#7DB46CFF"
}



function ThemeReducer(state, action) {
    switch (action.type) {
        case "CHANGE_THEME": {
            return { ...state, theme: action.payload }
        }
        default: {
            return state;
        }
    }
}

export const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, { theme: 'dark' })

    let ui = state.theme === 'dark' ? darkTheme : lightTheme 

    const changeThemeAction = (bool) => {
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