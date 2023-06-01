import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FindCity from "../../components/FindCity";
import TrendingDoctors from "../../components/TrendingDoctors";

export default function Directory() {
  return (
    <>
      <Navbar />
      <FindCity />
      <TrendingDoctors />
      <Footer />
    </>
  );
}
