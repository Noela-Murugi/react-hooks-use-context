import React, { useState } from "react";

const Theme = React.createContext()

function ThemeProvider ( { children }){
    const [theme, setTheme] = useState("dark");

    return (
        <Theme.Provider value={{theme, setTheme}}> {children} </Theme.Provider>
    )

}

export { Theme, ThemeProvider}
