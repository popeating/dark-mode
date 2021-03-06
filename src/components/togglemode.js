import React, { useState, useEffect } from 'react';
import moon from '../svg/moon.svg';
import sun from '../svg/sun.svg';

const ToggleMode = () => {
  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }
  useEffect(() => {
    setTheme(window.__theme);
  }, []);

  const [theme, setTheme] = useState(websiteTheme);

  const ThemeToggle = () => {
    window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark');
    setTheme(websiteTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className="button" onClick={ThemeToggle}>
      {theme === 'dark' ? (
        <img src={sun} alt="Light mode" />
      ) : (
        <img src={moon} alt="Dark mode" />
      )}
    </button>
  );
};

export default ToggleMode;
