import logo from './logo.svg';
import './App.css';

import { Button, createTheme, NextUIProvider, Text, theme } from "@nextui-org/react"
import Body from './components/Body';
import { Switch, useTheme } from '@nextui-org/react'
import {useState} from 'react';

const fonts = {
  sans: "sans-serif",
};

const sharedTheme: Theme = {
  theme: {
    fonts
  }
};

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      secondary:'black',
      accent:'black'
    }
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      secondary:'white',
      accent:'white'
    }, 
  }
})



function App() {
  const { type } = useTheme();
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
        <Body onToggleTheme={() => {setIsDark(!isDark)}}/>
      </NextUIProvider>
    </div>
  );
}

export default App;
