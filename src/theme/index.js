import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#16a34a",
    },
    secondary: {
      main: "#16a34a",
    },
    special: {
      main: "#34A853",
    },
    transparent: {
      main: "rgba(236, 5, 252, 0.4)"
    }
  },
});

export default theme;