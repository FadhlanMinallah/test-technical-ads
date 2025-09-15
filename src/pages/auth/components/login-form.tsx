import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import InputPassword from '@/components/ui/input-password';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { toastConfig } from '@/utils/helpers';

import { FormEvent } from 'react';
import { useLoginStore } from '@/store/use-login-store';

export default function LoginForm() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const { values, errors, setField, authenticate, isAuthenticated } = useLoginStore();

    useEffect(() => {
        if (isAuthenticated) {
            console.log("isAuthenticated");
            navigate("/dashboard");
            // navigate("/dashboard", { replace: true });
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (authenticate()) {
            navigate("/dashboard");
        } else {
            console.log("Login gagal");
        }
    };
    return (
        <form className="space-y-5">
            <div className="grid w-full items-center gap-2 text-left">
                <Label htmlFor="email">Username</Label>
                <Input type="email" id="username" placeholder="Username" value={values.username} onChange={(e) => setField("username", e.target.value)} />

                {errors.username && (<p className="text-red-500 text-xs relative">{errors.username}</p>)}
            </div>
            <div className="grid w-full items-center gap-2 text-left">
                <InputPassword label="Password" placeholder="Password" value={values.password} onChange={(e) => setField("password", e.target.value)} />

                {errors.password && (<p className="text-red-500 text-xs relative">{errors.password}</p>)}
            </div>

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