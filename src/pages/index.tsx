import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import NavBar from "@/components/NavBar";
import NumbersSection from "@/components/NumbersSection";
import ReviewsSection from "@/components/ReviewsSection";


export default function Home() {

  const handleGuestLogin = () => {
  // void function
 };
  
  return (
    <>
    <NavBar onLogin={() => { /* handle login here */ }} handleGuestLoginUpdate={handleGuestLogin}/>
    <Landing onLogin={() => { /* handle login here */ }} handleGuestLoginUpdate={handleGuestLogin} />
    <FeaturesSection />
    <ReviewsSection />
    <NumbersSection />
    <Footer />
    </>
  );
}
