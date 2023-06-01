import { useState, useEffect } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaHospital,
} from "react-icons/fa";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAM2ZKj6EERDGHsUAZnWLLleBDiXp4UZ2I",
  authDomain: "stem-medics.firebaseapp.com",
  projectId: "stem-medics",
  storageBucket: "stem-medics.appspot.com",
  messagingSenderId: "485147170789",
  appId: "1:485147170789:web:8bc70013cbb55cb7f1010c",
});

const FindCity = () => {
  const [cityValue, setCityValue] = useState("");
  const [showDoctorsList, setShowDoctorsList] = useState([]); // to show doctors list

  useEffect(() => {
    console.log(cityValue);
  }, [cityValue]);

  const onclickSearch = (e) => {
    e.preventDefault();
    console.log("city value is", cityValue);
    setShowDoctorsList([]);

    firebase
      .firestore()
      .collection("myCollection")
      .get()
      .then((snapshot) => {
        if (snapshot.docs.length > 0) {
          snapshot.docs.forEach((doc) => {
            if (doc.data().city.toLowerCase() == cityValue.toLowerCase()) {
              console.log(doc.data());

              setShowDoctorsList((showDoctorsList) => [
                ...showDoctorsList,
                doc.data(),
              ]);
            }
          });
        }

        snapshot.forEach((doc) => {
          console.log(doc);
        });
      });
  };

  return (
    <div className="container">
      {/* search bar */}
      <div className="find-city">
        <h2>Find Doctors In Your City</h2>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter your city name"
            onChange={(e) => setCityValue(e.target.value)}
          />
          <button>
            <FaSearch onClick={(e) => onclickSearch(e)} type="submit" />
          </button>
          <button>
            <FaMapMarkerAlt />
          </button>
        </div>
        <style jsx>{`
          .find-city {
            text-align: center;
            color: #333333;
            margin-top: 2rem;
          }
          h2 {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
          .input-wrapper {
            display: flex;
            align-items: center;
            max-width: 500px;
            margin: 0 auto;
            padding: 1rem;
            border-radius: 4px;
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          input {
            flex-grow: 1;
            border: none;
            padding: 0.5rem;
            font-size: 1rem;
            color: #333333;
          }
          button {
            border: none;
            background-color: transparent;
            color: #333333;
            font-size: 1.5rem;
            margin-left: 0.5rem;
            cursor: pointer;
          }
          button:hover {
            color: #008080;
          }
        `}</style>
      </div>

      {/* city list */}
      <div>
        <div className="city-list">
          {showDoctorsList.map((doctor) => (
            <>
              <div className="doctor-card">
                <div className="doctor-card__header">
                  <h3>{doctor.name}</h3>
                  <p>{doctor.specialty}</p>
                </div>
                <div className="doctor-card__body">
                  <p>
                    <FaMapMarkerAlt /> {doctor.city}
                  </p>
                  <p>
                    <FaPhoneAlt /> {doctor.mobile}
                  </p>
                  <p>
                    <FaHospital /> {doctor.hospital}
                  </p>
                  <p>Experience: {doctor.experience}</p>
                </div>
              </div>

              <style jsx>{`
                .doctor-card {
                  border: 1px solid #ccc;
                  border-radius: 4px;
                  padding: 16px;
                  width: 100%;
                  max-width: 400px;
                  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
                  margin: 16px auto;
                }

                .doctor-card__header {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                }

                .doctor-card__header h3 {
                  font-size: 24px;
                  margin: 0;
                  color: #008080; /* color accent */
                }

                .doctor-card__header p {
                  font-size: 16px;
                  color: #888;
                  margin: 0;
                }

                .doctor-card__body {
                  margin-top: 16px;
                }

                .doctor-card__body p {
                  font-size: 16px;
                  margin: 0;
                  color: #333;
                }

                .doctor-card__body p svg {
                  margin-right: 8px;
                  vertical-align: middle;
                  color: #008080; /* color accent */
                }

                .doctor-card__hospital {
                  font-size: 14px;
                  margin-top: 8px;
                  color: #555;
                }
              `}</style>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindCity;
