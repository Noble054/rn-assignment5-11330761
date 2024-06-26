// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

export const ThemeContext = createContext();

const lightTheme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    background: '#ffffff',
    text: '#000000',
  },
};

const darkTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    background: '#000000',
    text: '#ffffff',
  },
};

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
