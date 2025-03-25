import { useEffect } from 'react';

export const useTheme = (setIsDarkMode) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      setIsDarkMode(false);
      document.body.classList.add('light-mode');
    }
  }, []);
};

export const toggleTheme = (setIsDarkMode) => {
  setIsDarkMode(prevMode => {
    const newMode = !prevMode;
    if (newMode) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
    return newMode;
  });
};
  