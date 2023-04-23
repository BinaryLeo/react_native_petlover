import { Provider as ReduxProvider } from "react-redux";
import Store from "./src/store";
import Router from "./src/routes";
export default function App() {
  return (
    <ReduxProvider store={Store}>
      <Router />
    </ReduxProvider>
  );
}

