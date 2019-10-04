import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [enabledState, setEnabledState] = useLocalStorage('darkMode', false)

    useEffect(() => {
        const darkMode = 'dark-mode';
        const element = window.document.body;

        if (enabledState === true) {
          element.classList.add(darkMode);
        } else {
          element.classList.remove(darkMode);
        }
      }, [enabledState]);
    
      return [enabledState, setEnabledState];
}