import { create } from "zustand";
import { loginSchema, LoginInput } from "@/utils/validation-schema";
import { toast } from "react-toastify";
import { toastConfig } from "@/utils/helpers";

interface User {
    username: string;
    password: string;
}

interface FormState {
    values: LoginInput;
    errors: Partial<Record<keyof LoginInput, string>>;
    isAuthenticated: boolean;
    hydrated: boolean;
    user: User | null;
    setField: (field: keyof LoginInput, value: string) => void;
    validate: () => boolean;
    authenticate: () => boolean;
    logout: () => void;
    setUser: (user: User) => void;
}

const DUMMY_CREDENTIALS = {
    username: "test_admin",
    password: "test_password123",
};

export const useLoginStore = create<FormState>((set, get) => ({
    values: { username: "", password: "" },
    errors: {},
    isAuthenticated: false,
    hydrated: false,
    user: null,

    setField: (field, value) => {
        set((state) => ({
            values: { ...state.values, [field]: value },
        }));
    },
    validate: () => {
        const { values } = get();
        const result = loginSchema.safeParse(values);

        if (!result.success) {
            const formattedErrors: Record<string, string> = {};
            result.error.issues.forEach((err) => {
                const path = err.path[0];
                formattedErrors[path.toString()] = err.message;
            });

            set({ errors: formattedErrors });
            return false;
        }

        set({ errors: {} });
        return true;
    },
    authenticate: () => {
        const { values, validate } = get();

        // pertama validasi schema
        if (!validate()) return false;

        // cek ke dummy creds
        if (values.username === DUMMY_CREDENTIALS.username && values.password === DUMMY_CREDENTIALS.password) {
            set({
                isAuthenticated: true,
                errors: {},
                user: {
                    username: values.username,
                    password: values.password,
                },
            });
            try {
                localStorage.setItem("isAuthenticated", "true");
                localStorage.setItem("user", JSON.stringify({ username: values.username, password: values.password }));
            } catch (e) {
                console.warn("localStorage tidak tersedia");
            }
            return true;
        }

        // set({
        //     errors: {
        //         username: "Kredensial tidak cocok",
        //     },
        // });
        toast.error('Username atau Password salah.', {
            ...toastConfig,
            position: 'top-left',
        });
        return false;
    },
    logout: () => {
        set({ isAuthenticated: false, values: { username: "", password: "" } });
        try {
            localStorage.removeItem("isAuthenticated");
        } catch { }
    },
    setUser: (user: User) => set({ user }),
}
));

// Hydrate from localStorage (flag hydrated = sudah selesai sync dari localStorage atau belum)
export const initAuth = () => {
    const saved = localStorage.getItem("isAuthenticated") === "true";
    useLoginStore.setState({ isAuthenticated: saved, hydrated: true }); // tujuan hydrated = menghindari flicker (efek kedip) saat restore state dari localStorage
};