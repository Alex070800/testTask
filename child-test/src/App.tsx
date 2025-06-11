import { Provider } from "react-redux";
import AppRouter from "./configs/routes";
import "./shared/styles/index.scss";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
