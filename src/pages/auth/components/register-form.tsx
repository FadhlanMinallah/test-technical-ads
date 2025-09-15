import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SocialLogin from '@/components/custom/widget/widget-social-buttons';
import InputPassword from '@/components/ui/input-password';

export default function RegisterForm() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validasi sederhana
        if (!username || !password) {
            setError('Username dan password harus diisi');
            return;
        }

        // Simulasi login berhasil
        // Dalam aplikasi nyata, ini akan memanggil API
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('user', JSON.stringify({ username, name: 'Admin User' }));
            navigate('/users');
        } else {
            setError('Username atau password salah');
        }
    };

    return (
        <form className='space-y-5'>
            <div className="grid w-full items-center gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input type="text" id="name" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid w-full items-center gap-2">
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" placeholder="Choose a username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <InputPassword label="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <InputPassword label="Confirm Password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />


            <Button onClick={handleSubmit} size={'lg'} width={'full'}>Register</Button>
        </form>
    );
}