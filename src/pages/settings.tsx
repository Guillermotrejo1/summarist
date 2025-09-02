import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import { useRouter } from "next/router";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoginModal from "@/components/LoginModal";

const Settings = () => {
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [, setIsGuestLoggedIn] = useState(false);
  const subscriptionPlan = isPremium ? "Premium" : "Basic";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const db = getFirestore();
  const auth = getAuth();
  const router = useRouter();

  const handleGuestLoginUpdate = (isGuestLoggedIn: boolean) => {
    setIsGuestLoggedIn(isGuestLoggedIn);
    localStorage.setItem("isGuestLoggedIn", JSON.stringify(isGuestLoggedIn));
  };

  useEffect(() => {
    const storedIsGuestLoggedIn = localStorage.getItem("isGuestLoggedIn");
    if (storedIsGuestLoggedIn !== null) {
      setIsGuestLoggedIn(JSON.parse(storedIsGuestLoggedIn));
    }
  }, []);



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsLoggedIn(!!user); // Set login status based on user state
      if (user) {
        console.dir(user)
        const userId = user.uid;
        const userRef = doc(db, "customers", userId);
        const docSnap = await getDoc(userRef); // Get user document from Firestore
        if (docSnap.exists()) {
          const userData = docSnap.data();
          console.dir(userData)
          console.log("User status: %s", userData.stripeSubscriptionStatus);
          console.log("User premium: %s", userData.premium);

          // Check and update premium status
          if (
            userData.stripeSubscriptionStatus === "active" &&
            !userData.premium
          ) {
            await updateDoc(userRef, { premium: true });
            setIsPremium(true);
          } else {
            setIsPremium(userData.premium);
          }
        }
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [auth, db]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to change font size
  const handleFontSizeChange = (size: string) => {
    console.log(`Font size changed to: ${size}`);
  };

   const handleGuestLogin = () => {
  setTimeout(() => {
    if (handleGuestLoginUpdate) {
      handleGuestLoginUpdate(true);
    }
    router.push("/forYou");
  }, 3000);
};

  return (
    <>
      <SearchBar />
      <Sidebar onFontSizeChange={handleFontSizeChange} handleGuestLoginUpdate={handleGuestLogin} />
      <div className="py-10 md:ml-64 transition-all slide-in-right duration-100">
        <div className="max-w-[1070px] w-full mx-auto px-6">
          <div className="mb-[32px]">
            <h1 className="text-[32px] font-bold mb-1 text-[#032b41]">
              Settings
            </h1>
            <div className="border-b-[1px] border-[#e1e7ea] pb-4"></div>
          </div>
          {isLoading ? (
            <>
              <div className="mb-[32px]">
                <h3 className="text-lg text-[#032b41] font-bold">
                  <Skeleton
                    variant="rectangular"
                    width={200}
                    height={20}
                    sx={{ borderRadius: 0 }}
                  />
                </h3>
                <p className="mt-1">
                  <Skeleton
                    variant="text"
                    width={200}
                    height={20}
                    sx={{ borderRadius: 0 }}
                  />
                </p>
                <div className="border-b-[1px] border-[#e1e7ea] pb-4"></div>
              </div>
              <div className="mb-[32px]">
                <h3 className="text-lg text-[#032b41] font-bold">
                  <Skeleton
                    variant="rectangular"
                    width={200}
                    height={20}
                    sx={{ borderRadius: 0 }}
                  />
                </h3>
                <p className="mt-1">
                  <Skeleton
                    variant="rectangular"
                    width={200}
                    height={20}
                    sx={{ borderRadius: 0 }}
                  />
                </p>
                <div className="border-b-[1px] border-[#e1e7ea] pb-4"></div>
              </div>
            </>
          ) : isLoggedIn ? (
            isPremium ? (
              <>
                <div className="mb-[32px]">
                  <h3 className="text-lg text-[#032b41] font-bold">
                    Your Subscription plan
                  </h3>
                  <p>{subscriptionPlan}</p>
                  <div className="border-b-[1px] border-[#e1e7ea] pb-4"></div>
                </div>
                <div className="mb-[32px]">
                  <h3 className="text-lg text-[#032b41] font-bold">Email</h3>
                  <p>{auth.currentUser?.email}</p>
                  <div className="border-b-[1px] border-[#e1e7ea] pb-4"></div>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg text-[#032b41] font-bold mb-2">
                  Your Subscription plan
                </h3>
                <div className="mb-2">{subscriptionPlan}</div>
                <button
                  className="btn max-w-[200px] mb-6 active:scale-95"
                  onClick={() => router.push("/plans")}
                >
                  Upgrade to Premium
                </button>
                <div className="border-b-[1px] border-[#e1e7ea] mb-4"></div>
                <div className="mb-[32px]">
                  <h3 className="text-lg text-[#032b41] font-bold">Email</h3>
                  <p>{auth.currentUser?.email}</p>
                  <div className="border-b-[1px] border-[#e1e7ea] pb-4"></div>
                </div>
              </>
            )
          ) : (
            <>
              <div className="flex justify-center align-center">
                <Image
                  src="/assets/login.png"
                  alt="Login"
                  width={500}
                  height={500}
                />
              </div>
              <p className="text-center text-[#032b41] text-2xl font-bold mb-4">
                Login to your account to see your details
              </p>
              <button
                className="btn max-w-[200px] mx-auto"
                onClick={handleOpenModal}
              >
                Login
              </button>
              {isModalOpen && (
                <LoginModal
                  onClose={handleCloseModal}
                  onLogin={() => {}}
                  handleGuestLoginUpdate={handleGuestLoginUpdate}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Settings;
