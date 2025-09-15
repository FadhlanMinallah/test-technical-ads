import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"


export default function SocialLogin({ text = "Or Login With" }: { text?: string }) {
  return (
    <div className="w-full max-w-md mx-auto space-y-6 mb-7">
      {/* Divider */}
      <div className="flex items-center">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="px-3 text-gray-400 text-xs md:text-sm">{text}</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Social Buttons */}
      <div className="flex gap-4">
        {/* Google */}
        <button
          className="flex items-center justify-center w-full gap-2 px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-md md:rounded-xl cursor-pointer hover:bg-gray-100"
        >
          <FcGoogle className="lg:w-4 xl:w-5 lg:h-4 xl:h-5" />
          <span className="text-gray-700 font-medium text-xs md:text-sm xl:text-base">Google</span>
        </button>

        {/* Apple */}
        <button
          className="flex items-center justify-center w-full gap-2 px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-md md:rounded-xl cursor-pointer hover:bg-gray-100"
        >
          <FaApple className="lg:w-4 xl:w-5 lg:h-4 xl:h-5" />
          <span className="text-gray-700 font-medium text-xs md:text-sm xl:text-base">Apple</span>
        </button>
      </div>
    </div>
  )
}
