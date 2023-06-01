import { useState } from "react";
import { FaStar } from "react-icons/fa";

const TrendingDoctors = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Arun Hegde",
      specialty: "Cardiology",
      city: "Faridabad",
    },
    {
      id: 2,
      name: "Dr. Ranjana Singh",
      specialty: "Dermatology",
      city: "Delhi",
    },
    {
      id: 3,
      name: "Dr. Urvi Patel",
      specialty: "Orthopedics",
      city: "Kanpur",
    },
    {
      id: 4,
      name: "Dr. Rajesh Bhatia",
      specialty: "Pediatrics",
      city: "Lucknow",
    },
  ]);

  const renderRatingStars = (rating) => {
    const roundedRating = Math.round(rating * 2) / 2; // Round to nearest 0.5
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < roundedRating) {
        stars.push(<FaStar key={i} className="star-icon" />);
      } else {
        stars.push(<FaStar key={i} className="star-icon star-icon-empty" />);
      }
    }

    return stars;
  };

  return (
    <div className="trending-doctors container">
      <h2>Trending Doctors</h2>
      <div className="doctor-list">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <p>{doctor.city}</p>
            <div className="rating">{renderRatingStars(doctor.rating)}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .trending-doctors {
          margin-top: 3rem;
        }

        .trending-doctors h2 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 1rem;
        }

        .doctor-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .doctor-card {
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 16px;
          background-color: #f7f7f7;
        }

        .doctor-card h3 {
          font-size: 18px;
          margin: 0;
          color: #333;
        }

        .doctor-card p {
          font-size: 14px;
          margin: 8px 0;
          color: #555;
        }
        .rating {
          display: flex;
          align-items: center;
        }

        .star-icon {
          color: #f2b01e;
          margin-right: 4px;
        }

        .star-icon-empty {
          color: #ccc;
        }
      `}</style>
    </div>
  );
};

export default TrendingDoctors;
