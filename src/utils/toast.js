import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({ autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER });

// add more config via the options object
const successToast = (message, options = {}) =>
  toast.success(message, {
    ...options,
  });

const errorToast = (message, options = {}) =>
  toast.error(message, {
    ...options,
  });

export { successToast, errorToast };