import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import NavBar from "@/components/NavBar";
import NumbersSection from "@/components/NumbersSection";
import ReviewsSection from "@/components/ReviewsSection";


export default function Home() {
  return (
    <>
    <NavBar/>
    <Landing />
    <FeaturesSection />
    <ReviewsSection />
    <NumbersSection />
    <Footer />
    </>
  );
}
