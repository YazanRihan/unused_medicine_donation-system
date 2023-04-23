import './App.css';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Homepage from './Homepage'

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#1a587c',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#57b9da',
    },
  },
});

class App extends React.Component {
  render() {
    return (
    <ThemeProvider theme={theme}>
      <Homepage/>
    </ThemeProvider>);
      
  }

  
}


export default App;