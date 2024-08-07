import { createTheme } from '@mui/material/styles';

const customBreakpoints = {
  values: {
    xs: 320,
    sm: 768,
    md: 1200,
    lg: 1440,
    lgp: 1441,
    xl: 1920,
    xlp: 1921
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#462BEF',
    },
    secondary: {
      main: '#808080',
    },
    background: {
      default: '#fff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#1E1E1E',
      secondary: '#808080',
    },
    custom: {
      activeText: '#fff',
      activeBG: '#462BEF',
      redBG: '#FF002F',
      notActiveBG: '#fff',
      blackBG: '#07000e',
      footerBG: '#110000',
    },
  },
  breakpoints: customBreakpoints,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
    custom: {
      activeText: '#000000',
      activeBG: '#90caf9',
      redBG: '#ff6b6b',
      notActiveBG: '#424242',
      blackBG: '#f5f5f5',
      footerBG: '#eeeeee',
    },
  },
  breakpoints: customBreakpoints,
});