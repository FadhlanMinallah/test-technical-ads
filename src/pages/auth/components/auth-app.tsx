import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import AuthLayout from './auth-layout';


export default function AuthApp() {
    return (
        <AuthLayout>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </AuthLayout>
    );
}