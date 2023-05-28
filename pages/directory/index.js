import Navbar from "../../components/Navbar";
import FindCity, { cityValueExport } from "../../components/FindCity";
import Footer from "../../components/Footer";
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
