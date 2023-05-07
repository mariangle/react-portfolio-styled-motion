import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import CustomCursor from './components/Cursor';
import Home from './Home';
import Archive from './Archive';

function App() {
  const [theme, setTheme] = useState('dark');
  const { pathname } = useLocation();

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    document.title = "Maria";
  }, [pathname]);

  return (
    <div className="App">
      <Theme theme={theme}>
      <CustomCursor />
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} theme={theme}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </Theme>
    </div>
  );
}

export default App;