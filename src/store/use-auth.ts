import { create } from "zustand";
import { loginSchema, registerSchema, LoginValues, RegisterValues } from "../schemas/auth";

type User = {
    username: string;
    name: string;
};

type AuthState = {
    user: User | null;
    isAuthenticated: boolean;
    hydrated: boolean;
    errors: Record<string, string>;
    login: (values: LoginValues) => boolean;
    register: (values: RegisterValues) => boolean;
    logout: () => void;
    initAuth: () => void;
};

export const useAuthStore = create<AuthState>((set, get) => ({
    user: null,
    isAuthenticated: false,
    hydrated: false,
    errors: {},

    login: (values) => {
        const result = loginSchema.safeParse(values);
        if (!result.success) {
            const errors: Record<string, string> = {};
            result.error.issues.forEach((err) => {
                errors[err.path[0] as string] = err.message;
            });
            set({ errors });
            return false;
        }

        // Ambil user tersimpan
        const savedUser = localStorage.getItem("user");
        if (!savedUser) {
            set({ errors: { username: "User belum terdaftar" } });
            return false;
        }

        const parsedUser = JSON.parse(savedUser) as User & { password: string };
        if (parsedUser.username === values.username && parsedUser.password === values.password) {
            localStorage.setItem("isAuthenticated", "true");
            set({ user: parsedUser, isAuthenticated: true, errors: {} });
            return true;
        }

        set({ errors: { username: "Email atau password salah" } });
        return false;
    },

    register: (values) => {
        const result = registerSchema.safeParse(values);
        if (!result.success) {
            const errors: Record<string, string> = {};
            result.error.issues.forEach((err) => {
                errors[err.path[0] as string] = err.message;
            });
            set({ errors });
            return false;
        }

        const user: User & { password: string, username: string } = {
            name: values.name,
            username: values.username,
            password: values.password,
        };

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isAuthenticated", "true");

        set({ user, isAuthenticated: true, errors: {} });
        return true;
    },

    logout: () => {
        localStorage.removeItem("isAuthenticated");
        set({ user: null, isAuthenticated: false });
    },

    initAuth: () => {
        const saved = localStorage.getItem("isAuthenticated") === "true";
        const savedUser = localStorage.getItem("user");
        set({
            isAuthenticated: saved,
            user: savedUser ? JSON.parse(savedUser) : null,
            hydrated: true,
        });
    },
}));
