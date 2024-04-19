import ThemeProvider from "./theme";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
