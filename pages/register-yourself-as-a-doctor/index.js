import React from "react";
import DoctorRegistrationForm from "../../components/form";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function index() {
  return (
    <div>
      <Navbar />
      <DoctorRegistrationForm />
      <Footer />
    </div>
  );
}

export default index;
