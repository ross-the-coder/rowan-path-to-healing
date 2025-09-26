import { createRoot } from "react-dom/client";
import TestApp from "./TestApp.tsx";
import "./index.css";

console.log("main.tsx is executing");
createRoot(document.getElementById("root")!).render(<TestApp />);
