import React from 'react';
import {ThemeProvider } from 'styled-components';

const lightTheme = {
  backgroundColor: "#f9f9f9",
  secondBackground: "#f3f3f3",
  navBackground: "	rgba(249,249,249,0.3)",
  navShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  headerColor: "#2d2e32",
  textColor: "#545353",
  mainColor: "#00caad",  
  secondColor: "#02adb0",
  gradientColor: "linear-gradient(45deg, #00caad, #02adb0)",
  scrollBar: "#CCCCCC",
  keyword: "blue",
  className: "#78b3da",
};

const darkTheme = {
  backgroundColor: "#0d1117",
  secondBackground: "#161b22",
  navBackground: "rgba(13,17,23,0.3);",
  navShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  headerColor: '#ffffff',
  textColor: "#bdbdbd",
  mainColor: "#52a2ff",
  secondColor: "#b474f8",
  gradientColor: "linear-gradient(45deg, #52a2ff, #b474f8)",
  scrollBar: "rgba(70, 69, 69, 0.3);",
  keyword: "#326cb8",
  className: "#389d89"
};

function Theme({ children, theme }) {
  return <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>{children}</ThemeProvider>;
}

export default Theme;