import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import InputPassword from '@/components/ui/input-password';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { toastConfig } from '@/utils/helpers';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    // Dummy credential
    const DUMMY_USER = {
        username: "test_admin",
        password: "test_password123",
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!username || !password) {
            setError("Username dan password wajib diisi!");
            toast.error('Username dan Password wajib diisi.', {
                ...toastConfig,
                position: 'top-left',
            });
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
                setError("");
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('user', JSON.stringify({ username, name: 'Admin User' }));
                navigate("/dashboard");
            } else {
                setError("Username atau password salah!");
                toast.error('Username atau Password salah.', {
                    ...toastConfig,
                    position: 'top-left',
                });
            }
            setIsLoading(false);
        }, 1500);
    };
    return (
        <form className="space-y-5">
            <div className="grid w-full items-center gap-2">
                <Label htmlFor="email">Username</Label>
                <Input type="email" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <InputPassword label="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" className="text-xs md:text-sm text-gray-400 font-normal cursor-pointer">Remember me</Label>
                    </div>
                </div>
                <Link to="/forgot-password" className="text-xs md:text-sm text-primary">Forgot your password?</Link>
            </div>

            <Button onClick={handleSubmit} size={'lg'} width={'full'} isLoading={isLoading}>Log In</Button>
        </form>
    )
}