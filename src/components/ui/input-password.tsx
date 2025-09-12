import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react"; // Gunakan ikon dari lucide-react (atau ikon lain yang kamu gunakan)
import { cn } from "@/lib/utils"; // Optional: fungsi utilitas className jika kamu pakai tailwind-merge atau clsx

interface InputPasswordProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputPassword({
  label,
  placeholder,
  value,
  onChange,
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid w-full items-center gap-2 relative">
      <Label htmlFor="password">{label}</Label>
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="pr-10" // Tambah padding kanan agar ikon tidak menutupi teks
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer",
            "focus:outline-none"
          )}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {!showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}
