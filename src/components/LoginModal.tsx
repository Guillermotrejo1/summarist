import { useState } from "react";
import { useRouter } from "next/router";
import { BsX } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { IoPerson } from "react-icons/io5";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface LoginModalProps {
  onClose: () => void;
  onLogin: () => void
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleGuestLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/forYou");
    }, 3000);
  };

  const register = async () => {
  setIsLoading(true);
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered successfully");
    if (onLogin) {
      onLogin();
    }
    onClose();
    router.push("/forYou");
  } catch (error) {
    console.error("Error registering user:", error);
  } finally {
    setIsLoading(false);
  }
};

 const login = async () => {
  setIsLoading(true);
  try {
    await signInWithEmailAndPassword(auth, email, password);
    setIsSignUp(false);
    if (onLogin) {
      onLogin();
    }
    onClose();
    router.push("/forYou");
  } catch (error) {
    console.error("Error logging in user:", error);
  } finally {
    setIsLoading(false);
  }
};

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-50 flex justify-center items-center">
      <div className="relative w-[400px] bg-white rounded-lg p-8">
        <p className="text-center text-[20px] font-bold text-[#032b41] mb-4">
          {isSignUp ? "Sign up to Summarist" : "Log in to Summarist"}
        </p>
        {isSignUp ? (
          <>
            <div className="flex flex-col justify-center items-center">
              <div className="w-full justify-end">
                <button className="flex btn-google items-center justify-center w-full mb-4 relative">
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#fff]"></div>
                    </div>
                  ) : (
                    <>
                      <FcGoogle className="absolute left-2 text-3xl bg-[#fff] rounded" />
                      <span>Sign up with Google</span>
                    </>
                  )}
                </button>
              </div>
              <div className="mb-4">
                <span className="or-text relative text-sm">or</span>
              </div>
              <input
                className="border-2 border-[#bac8ce] w-full p-2 rounded mb-4"
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border-2 border-[#bac8ce] w-full p-2 rounded mb-4"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="flex btn items-center justify-center w-full mb-4 relative"
                onClick={register}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#fff]"></div>
                  </div>
                ) : (
                  <>
                    <span>Sign up</span>
                  </>
                )}
              </button>
            </div>
            <button
              className="absolute top-2 right-2 text-5xl"
              onClick={onClose}
            >
              <BsX />
            </button>
            <button
              className="absolute right-0 rounded-b-lg hover:!bg-[#e0e5e3] text-[#116be9] w-full text-center p-2 !bg-[#f1f6f4]"
              onClick={toggleForm}
            >
              {isSignUp ? "Already have an account?" : "Dont have an account?"}
            </button>
          </>
        ) : (
          <>
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
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#fff]"></div>
                    </div>
                  ) : (
                    <>
                      <FcGoogle className="absolute left-2 text-3xl bg-[#fff] rounded" />
                      <span>Login with Google</span>
                    </>
                  )}
                </button>
              </div>
              <div className="mb-4">
                <span className="or-text relative text-sm">or</span>
              </div>
              <input
                className="border-2 border-[#bac8ce] w-full p-2 rounded mb-4"
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border-2 border-[#bac8ce] w-full p-2 rounded mb-4"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="flex btn items-center justify-center w-full mb-4 relative"
                onClick={login}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#fff]"></div>
                  </div>
                ) : (
                  <>
                    <span>Login</span>
                  </>
                )}
              </button>
            </div>
            <button
              className="absolute top-2 right-2 text-5xl"
              onClick={onClose}
            >
              <BsX />
            </button>
            <div className="text-[#116be9] text-center p-2 mt-4">
              Forgot Password?
            </div>
            <button
              className="absolute right-0 rounded-b-lg hover:!bg-[#e0e5e3] text-[#116be9] w-full text-center p-2 !bg-[#f1f6f4]"
              onClick={toggleForm}
            >
              Dont have an account?
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
