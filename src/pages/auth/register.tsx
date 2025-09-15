import { Link } from 'react-router-dom';
import SocialLogin from '@/components/custom/widget/widget-social-buttons';
import RegisterForm from './components/register-form';

export default function Register() {
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