import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const ToggleButton = () => {
    const {toggleTheme} = useContext(ThemeContext) as {toggleTheme: () => void}
  return (
    <button onClick={toggleTheme}>Toggle Theme</button>
  )
}

