import { render } from "preact";
import "./index.css";
import { App } from "./app.jsx";

render(<App />, document.getElementById("app"));

// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";
// import App from "./app.jsx";

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
