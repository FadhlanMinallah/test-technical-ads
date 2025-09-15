import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SocialLogin from '@/components/custom/widget/widget-social-buttons';
import LoginForm from '@/pages/auth/components/login-form';

export default function Login() {


  return (
    <div>
      <div className='text-center'>
        <p className='auth-title'>Welcome Back</p>
        <p className='auth-subtitle'>Enter your email and password to access your account.</p>

        <div className="space-y-5">
          <LoginForm />

          <SocialLogin />

          <p className='text-xs md:text-sm text-gray-400'>
            Don’t have an account?{' '}
            <Link to="/register" className="text-primary">Register now</Link>
          </p>
        </div>

      </div>

      <ToastContainer />
    </div>
  );
}