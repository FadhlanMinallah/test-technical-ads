import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthApp from "./AuthApp";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <AuthApp />
    </StrictMode>
)