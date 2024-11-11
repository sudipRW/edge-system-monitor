import { purple,blue,pink,orange } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: purple,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: blue,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
export const pinkTheme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: pink,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
export const orangeTheme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: orange,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});