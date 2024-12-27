import {  createContext, useReducer } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props){

    const themeReducer = (state, action) => {
        switch (action.type){
            case 'CHANGE_THEME':
                return {
                    ...state,
                    'theme' : action.payload
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(themeReducer, {theme: 'light'});

    const setTheme = (theme) => {
        dispatch({
            type: 'CHANGE_THEME',
            payload: theme
        })
    }
    return (
        <ThemeContext.Provider value={{...state, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );

}

// export function ThemeProvider(props){
//     const [theme, setTheme] = useState('light');

//     return (
//     <ThemeContext.Provider value={{theme, setTheme}}>
//         {props.children}
//     </ThemeContext.Provider>
//     );
// }