import { Input } from "@/components/ui/input"
import { LucideIcon } from "lucide-react"
import React from "react"

interface InputWithIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon
  iconPosition?: "left" | "right"
}

export function InputWithIcon({
  icon: Icon,
  iconPosition = "left",
  className,
  ...props
}: InputWithIconProps) {
  return (
    <div className="relative w-full">
      {iconPosition === "left" && (
        <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      )}

      <Input
        {...props}
        className={`${iconPosition === "left" ? "pl-9" : "pr-9"} ${className ?? ""}`}
      />

      {iconPosition === "right" && (
        <Icon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      )}
    </div>
  )
}
