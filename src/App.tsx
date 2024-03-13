
import { Toaster } from "./components/ui/sonner.js";
import "./index.css";
import MainRouter from "./routes/index.routes.jsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainRouter />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
