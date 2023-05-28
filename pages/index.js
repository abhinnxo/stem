import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FindCity from "../components/FindCity";
import Footer from "../components/Footer";
import TrendingDoctors from "../components/TrendingDoctors";
import Options from "../components/Options";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <FindCity /> */}
      <Options />
      <TrendingDoctors />
      <Footer />
    </div>
  );
}
