import React, { useState } from "react";
import { Home } from "./page/Home";
import GlobalStyled from "./styles/global";
import light from "./styles/theme/light";
import dark from "./styles/theme/dark";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";

function App() {
  const [theme, setTheme] = useState(light);

  const toogleTheme = () => {
    console.log(theme.title);
    console.log(theme.colors.background);
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyled />
        <Home toogleTheme={toogleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
