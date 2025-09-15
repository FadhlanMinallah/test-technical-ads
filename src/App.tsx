import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "./routes/protected-routes";
import AuthApp from "@/pages/auth/components/auth-app";
import AppLayout from "@/components/layout/app-layout";

// pages
import DashboardPage from "@/pages/dashboard";
import UsersPage from "@/pages/users";
import SchedulePage from "@/pages/schedule";
import FinancePage from "@/pages/finance";
import StatisticPage from "@/pages/statistic";
import NotFoundPage from "@/pages/not-found";
import { initAuth, useLoginStore } from "./store/use-login-store";
import { useEffect } from "react";

function App() {
  const hydrated = useLoginStore((state) => state.hydrated);
  const isAuthenticated = useLoginStore((state) => state.isAuthenticated);

  useEffect(() => {
    initAuth();
  }, []);

  if (!hydrated) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/*" element={<AuthApp />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoutes isLoggedIn={isAuthenticated} />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/statistic" element={<StatisticPage />} />
          </Route>
        </Route>

        {/* Not Found */}
        <Route path="/404" element={<NotFoundPage />} />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
