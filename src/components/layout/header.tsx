import { Bell, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DropdownProfile from "@/components/custom/dropdown/dropdown-profile";
import { useAuthStore } from '@/store/use-auth';

export default function Header({ className }: { className?: string }) {
  const navigate = useNavigate();

  const location = useLocation();
  const pathName = location.pathname;

  const [title, setTitle] = useState('');
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    setTitle(pathName.replace('/', '').charAt(0).toUpperCase() + pathName.replace('/', '').slice(1));
  }, [pathName])

  const handleLogout = () => {
    logout();
    navigate('/login');
  };


  return (
    <div className={`grid grid-cols-[80px_minmax(auto,_1fr)] border-b border-sidebar-border bg-white ${className}`}>
      <div className="flex items-center justify-center border-r border-sidebar-border min-w-16">
        <img src="src/assets/logo.svg" alt="" className="w-8 h-8" />
      </div>
      <div className="flex items-center justify-between px-6 py-3">
        {/* left */}
        <p className='font-medium text-xl'>{title}</p>

        {/* right: actions */}
        <div className="flex items-center gap-3">
          {/* notification button */}
          <button className="flex h-10 w-10 items-center justify-center rounded-lg border hover:bg-gray-50">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>

          {/* search bar */}
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search something"
              className="h-10 w-64 rounded-lg border pl-10 pr-16 text-sm focus:border-gray-400 focus:outline-none"
            />
            <kbd className="absolute right-3 rounded border bg-gray-50 px-1.5 text-xs text-gray-500">
              ⌘S
            </kbd>
          </div>

          <DropdownProfile onLogout={handleLogout} />
        </div>

      </div>

    </div>
  );
}