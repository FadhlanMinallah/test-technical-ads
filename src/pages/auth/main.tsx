import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthApp from "@/pages/auth/components/auth-app";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <AuthApp />
    </StrictMode>
)