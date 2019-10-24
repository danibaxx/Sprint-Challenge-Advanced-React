import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useDarkMode(key, initialValue) {
  const [darkMode, setDarkMode] = useLocalStorage('toogle', key)

  useEffect(() => {
      const dmEl = document.querySelector('body');

    if (darkMode) {
      dmEl.classList.add('dark-mode');
    } else {
      dmEl.classList.remove('dark-mode');
    }  
  },[darkMode])

  return [darkMode, setDarkMode];
};