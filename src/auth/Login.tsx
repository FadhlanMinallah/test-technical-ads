import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContainer from './AuthContainer';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import SocialLogin from '@/components/SocialLogin';
import InputPassword from '@/components/ui/input-password';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Username dan password harus diisi');
      return;
    }

    // simulation login
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify({ username, name: 'Admin User' }));
      navigate('/dashboard');
    } else {
      setError('Username atau password salah');
    }
  };

  return (
    <AuthContainer>
      <div>
        <div className='text-center'>
          <p className='text-4xl font-medium mb-4'>Welcome Back</p>
          <p className='text-sm text-gray-400 mb-12'>Enter your email and password to access your account.</p>

          <form className='space-y-5'>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="email">Username</Label>
              <Input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <InputPassword label="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className='text-sm text-gray-400 font-normal cursor-pointer'>Remember me</Label>
                </div>
              </div>
              <Link to="/forgot-password" className="text-sm text-primary">Forgot your password?</Link>
            </div>

            <Button onClick={handleSubmit} size={'lg'} width={'full'}>Log In</Button>

            <SocialLogin />

            <p className='text-sm text-gray-400'>
              Don’t have an account?{' '}
              <Link to="/register" className="text-primary">Register now</Link>
            </p>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200 opacity-30">
              <p className="text-sm font-medium text-gray-600 mb-2">Login Simulation</p>
              <ul className="space-y-1 text-sm text-gray-500">
                <li className="flex items-center">
                  <span className="font-medium mr-2">Username:</span>
                  <code className="bg-gray-100 px-2 py-0.5 rounded">admin</code>
                </li>
                <li className="flex items-center">
                  <span className="font-medium mr-2">Password:</span>
                  <code className="bg-gray-100 px-2 py-0.5 rounded">password</code>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </AuthContainer>
  );
}