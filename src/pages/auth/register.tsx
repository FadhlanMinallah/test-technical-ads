import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContainer from './components/auth-layout';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SocialLogin from '@/components/custom/widget/widget-social-buttons';
import InputPassword from '@/components/ui/input-password';
import RegisterForm from './components/register-form';

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
        <p className='auth-title'>Create an Account</p>
        <p className='auth-subtitle'>Join now to streamline your experience from day one.</p>

        <div className="space-y-5">
          <RegisterForm />

          <SocialLogin text='Or Register With' />

          <p className='text-xs md:text-sm text-gray-400'>Already have an account?{' '}
            <Link to="/login" className="text-primary">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}