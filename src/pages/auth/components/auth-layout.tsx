import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="p-3 bg-white h-screen">
      <div className='flex h-full'>

        {/* form */}
        <div className="flex-1 flex flex-col justify-between px-4 md:px-8 py-6">
          {/* logo */}
          <div className='flex items-center gap-2'>
            <img src="/src/assets/logo.svg" alt="" className='w-10 h-10' />
            <p className='text-lg font-medium'>Test</p>
          </div>
          {/* form content */}
          <div className='w-auto min-w-[200px] md:w-md mx-3 md:mx-auto mb-5'>
            {children}
          </div>
          <div className='flex justify-between items-center text-xs md:text-sm text-gray-400'>
            <p>Copyright © 2025 Test Enterprises LTD.</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        {/* background */}
        <div className='flex-1 rounded-2xl relative overflow-hidden md:block hidden'>
          <img src="/src/assets/bg-auth-side.png" alt="" className='absolute w-full h-full object-cover' />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
