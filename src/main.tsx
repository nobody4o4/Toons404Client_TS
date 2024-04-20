import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "./ctx/scroller-context.tsx";

export const Application = () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Application />);
