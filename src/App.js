import React from "react";

import "./index.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

// context
import AdoriStyleProvider from "./context/AdoriStyleProvider";
import AdoriDeviceProvider from "./context/AdoriDeviceProvider";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import theme from "./styles/theme";

// components
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography variant="h4" component="h4" gutterBottom>
          Adori studio BETA
        </Typography>
        <AdoriStyleProvider>
          <AdoriDeviceProvider>
            <Routes />
          </AdoriDeviceProvider>
        </AdoriStyleProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
