import { createContext, useContext, useMemo, useState } from "react"

export const themeOptions = {
  dark: 'current is dark',
  light: 'current is light'
}
const themeContext = createContext(null)

const ThemeContextProvider = ({children}) =>{
  const [dark,setDark] = useState(true)

  const contextValue = useMemo(()=>({
    theme: dark ? 'dark'  :'light',
    toggleTheme:()=>setDark((prev)=> !prev)

  }))

 return <themeContext.Provider value={contextValue}>
  {children}
 </themeContext.Provider>
}
export const useThemeContext = ()=>{
  const contextValue = useContext(themeContext)
 
 if(!contextValue) throw new Error('err')
 return contextValue
} 
export default ThemeContextProvider