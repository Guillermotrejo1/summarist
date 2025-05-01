import { useState } from "react";
import { useRouter } from "next/router";
import { BsX } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { IoPerson } from "react-icons/io5";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGuestLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/forYou");
    }, 1000);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-50 flex justify-center items-center">
      <div className="relative w-[400px] h-[500px] bg-white rounded-lg p-8">
        <p className="text-center text-[20px] font-bold text-[#032b41] mb-2">
          Log in to Summarist
        </p>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full justify-end">
            <button
              className="flex btn-guest items-center justify-center w-full mb-4 relative"
              onClick={handleGuestLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#fff]"></div>
                </div>
              ) : (
                <>
                  <IoPerson className="absolute left-2 text-2xl" />
                  <span>Login as a Guest</span>
                </>
              )}
            </button>
          </div>
          <div className="mb-4 flex justify-center items-center">
            <span className="or-text relative text-sm">or</span>
          </div>
          <div className="w-full justify-end">
            <button className="flex btn-google items-center justify-center w-full mb-4 relative">
              <FcGoogle className="absolute left-2 text-3xl bg-[#fff] rounded" />
              <span>Login with Google</span>
            </button>
          </div>
          <div className="mb-4">
            <span className="or-text relative text-sm">or</span>
          </div>
          <input
            className="border-2 border-[#bac8ce] w-full p-2 rounded mb-4"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="border-2 border-[#bac8ce] w-full p-2 rounded mb-4"
            type="text"
            placeholder="Password"
          />
          <button className="btn w-full flex items-center">Login</button>
        </div>
        <button className="absolute top-2 right-2 text-5xl" onClick={onClose}>
          <BsX />
        </button>
        <div className="text-[#116be9] text-center p-2 mt-4">
          Forgot Password?
        </div>
        <button className="absolute right-0 rounded-b-lg hover:!bg-[#e0e5e3] text-[#116be9] w-full text-center p-2 !bg-[#f1f6f4]">
          Dont have an account?
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
