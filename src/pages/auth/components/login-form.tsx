import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import InputPassword from '@/components/ui/input-password';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';

import { useAuthStore } from '@/store/use-auth';

export default function LoginForm() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const { login, errors } =  useAuthStore();
    const [values, setValues] = useState({username: "", password: ""});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const success = login(values);
        if(success) {
            navigate("/dashboard")
        }
    };
    return (
        <form className="space-y-5">
            <div className="grid w-full items-center gap-2 text-left">
                <Label htmlFor="email">Username</Label>
                <Input type="email" id="username" placeholder="Username" value={values.username} onChange={(e) => setValues({...values, username: e.target.value})} />

                {errors.username && (<p className="text-red-500 text-xs">{errors.username}</p>)}
            </div>
            <div className="grid w-full items-center gap-2 text-left">
                <InputPassword label="Password" placeholder="Password" value={values.password} onChange={(e) => setValues({...values, password: e.target.value})} />

                {errors.password && (<p className="text-red-500 text-xs">{errors.password}</p>)}
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