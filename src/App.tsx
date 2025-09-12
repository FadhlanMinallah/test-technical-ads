import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UsersPage from "./users/page";
import DashboardPage from "./dashboard/page";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./components/AppLayout";
import SchedulePage from "./schedule/page";
import FinancePage from "./finance/page";
import StatisticPage from "./statistic/page";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/statistic" element={<StatisticPage />} />
          </Route>
        </Route>

        {/* Redirects */}
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? "/users" : "/login"} replace />}
        />
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? "/users" : "/login"} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
