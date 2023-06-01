import React from "react";
import VerticalCard from "./VerticalCard";

function Options() {
  return (
    <div className="container mt-5">
      <h1 className="mb-3" style={{ color: "#008080" }}>
        We Provide
      </h1>
      <div className="row d-flex justify-content-around">
        <VerticalCard
          imageURL={
            "https://images.pexels.com/photos/5340266/pexels-photo-5340266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"Organ Donation"}
          decription={
            "Pledge to Donate your organs or find one for your loved ones."
          }
          callToAction={"View More"}
          URL={"https://www.organindia.org/"}
        />
        <VerticalCard
          imageURL={
            "https://images.pexels.com/photos/7335565/pexels-photo-7335565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"Hospital Beds"}
          decription={`Find vacant beds in your city.`}
          callToAction={"Check Availability"}
          URL={"https://beds.dgmhup-covid19.in/EN/covid19bedtrack"}
        />
        <VerticalCard
          imageURL={
            "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg"
          }
          title={"Pharmacy"}
          decription={"Browse Medicines in our vast inventory."}
          callToAction={"Browse Medicines"}
          URL={"https://www.1mg.com/"}
        />
        <VerticalCard
          imageURL={
            "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"Doctor Consultation"}
          decription={"Book an appointment with a doctor."}
          callToAction={"Find Now"}
          URL={"/directory"}
        />
      </div>
    </div>
  );
}

export default Options;
