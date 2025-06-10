import ReactDOM from "react-dom/client";
import App from "./App";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(<App />);

async function enableMocking() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/browser");

    return worker.start();
  }
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

enableMocking().then(() => {
  root.render(<App />);
});
