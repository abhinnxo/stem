import NavbarComp from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import TrendingDoctors from "../components/TrendingDoctors";
import Options from "../components/Options";

export default function Home() {
  return (
    <div>
      <NavbarComp />
      <Hero />
      <Options />
      <TrendingDoctors />
      <Footer />
    </div>
  );
}
