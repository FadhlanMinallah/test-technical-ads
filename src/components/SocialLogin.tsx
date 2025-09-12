import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"


export default function SocialLogin({ text = "Or Login With" }: { text?: string }) {
  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* Divider */}
      <div className="flex items-center">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="px-3 text-gray-400 text-sm">{text}</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Social Buttons */}
      <div className="flex gap-4">
        {/* Google */}
        <button
          className="flex items-center justify-center w-full gap-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100"
        >
          <FcGoogle className="w-5 h-5" />
          <span className="text-gray-700 font-medium">Google</span>
        </button>

        {/* Apple */}
        <button
          className="flex items-center justify-center w-full gap-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100"
        >
          <FaApple className="w-5 h-5" />
          <span className="text-gray-700 font-medium">Apple</span>
        </button>
      </div>
    </div>
  )
}
