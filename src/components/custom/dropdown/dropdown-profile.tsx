import { useState } from "react"
import { ChevronDown, LogOut, User } from "lucide-react"
import LogoutDialog from "@/components/custom/dialog/dialog-logout";
import { useAuthStore } from "@/store/use-auth";

export default function DropdownProfile({ onLogout }: { onLogout: () => void }) {
  const [open, setOpen] = useState(false)
  const { user } = useAuthStore();

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl border px-2 py-1.5 hover:bg-gray-50"
      >
        <img
          src="/src/assets/avatar-profile.jpg"
          alt="avatar"
          className="h-8 w-8 rounded-full object-cover"
        />
        <ChevronDown className="h-4 w-4 text-gray-600" />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg border bg-white shadow-md">
          <div
            className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50"
          >
            <User className="h-4 w-4 text-gray-600" />
            {/* Profile */}
            {user?.username}
          </div>
          <hr />

          <LogoutDialog
            onConfirm={onLogout}
            trigger={
              <button
                className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 text-red-600"
                onClick={onLogout}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            } />
        </div>
      )}
    </div>
  )
}
