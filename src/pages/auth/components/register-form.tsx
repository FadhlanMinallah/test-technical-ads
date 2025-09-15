import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from "@/store/use-auth";

// components
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import InputPassword from '@/components/ui/input-password';

export default function RegisterForm() {
    const navigate = useNavigate();
    const { register, errors } = useAuthStore();
    const [values, setValues] = useState({
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const success = register(values);
        if (success) {
            navigate("/dashboard")
        }
    };

    return (
        <form className='space-y-5'>
            <div className="grid w-full items-center gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input type="text" id="name" placeholder="Enter your full name" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
                {errors.name && <p className="text-red-500 text-xs text-left">{errors.name}</p>}
            </div>
            <div className="grid w-full items-center gap-2">
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" placeholder="Choose a username" value={values.username} onChange={(e) => setValues({ ...values, username: e.target.value })} />
                {errors.username && <p className="text-red-500 text-xs text-left">{errors.username}</p>}
            </div>
            <div className="grid items-center gap-2">
                <InputPassword label="Password" placeholder="Password" value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })} />
                {errors.password && <p className="text-red-500 text-xs text-left">{errors.password}</p>}
            </div>
            <div className="grid items-center gap-2">
                <InputPassword label="Confirm Password" placeholder="Confirm Password" value={values.confirmPassword} onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })} />
                {errors.confirmPassword && <p className="text-red-500 text-xs text-left">{errors.confirmPassword}</p>}
            </div>


            <Button onClick={handleSubmit} size={'lg'} width={'full'}>Register</Button>
        </form>
    );
}