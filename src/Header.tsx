import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"


export const Header = () => {
    const {theme} = useContext(ThemeContext) as {theme: string}
  return (
    <div style={{background:theme==='light' ?'#fff':'#333', color:theme==='light'?'#000':'#fff'}}>
        <h1>Current Theme : {theme}</h1>
    </div>
  )
}

