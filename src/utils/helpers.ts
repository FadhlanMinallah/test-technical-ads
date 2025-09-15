// import { User } from "@/types/user"
import { Bounce, ToastOptions } from 'react-toastify';

// React Toastify || https://fkhadra.github.io/react-toastify/introduction/
export const toastConfig: ToastOptions = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Bounce,
  toastId: 'toast',
}