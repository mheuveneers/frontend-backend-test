import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

import { MainRouter } from "./routers";
import { theme } from "./theme";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
