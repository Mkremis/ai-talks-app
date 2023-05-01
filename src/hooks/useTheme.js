import { useEffect, useState } from 'react';
const THEMES=['green', 'modern']
const useTheme =()=>{
    const [theme, setTheme]=useState(THEMES[0])

    const handleThemeChange=(e)=> setTheme(THEMES[e.target.value])

return{theme, THEMES, handleThemeChange}
}
export default useTheme;