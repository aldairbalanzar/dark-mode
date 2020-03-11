import { useLocalStorage, } from '../hooks/useLocalStorage'
import { useEffect } from 'react'

const useDarkMode = () => {
   const [darkMode, setDarkMode] = useLocalStorage('darkMode')
   useEffect(() => {
       if(localStorage.getItem(darkMode)) {
           body.classList.add('dark-mode')
       } else {
        body.classList.remove('dark-mode')
       }

   }, [darkMode]);

   return [darkMode, setDarkMode]
}