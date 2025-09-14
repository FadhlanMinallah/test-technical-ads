import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContainer from './components/auth-layout';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SocialLogin from '@/components/custom/widget/widget-social-buttons';
import InputPassword from '@/components/ui/input-password';

export default function Register() {
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
    <div>
      <div className='text-center'>
        <p className='text-4xl font-medium mb-4'>Create an Account</p>
        <p className='text-sm text-gray-400 mb-12'>Join now to streamline your experience from day one.</p>

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

          <SocialLogin text='Or Register With' />

          <p className='text-sm text-gray-400'>
            Already have an account?{' '}
            <Link to="/login" className="text-primary">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}