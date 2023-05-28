import { useState } from "react";

const specialties = [
  "Cardiology",
  "Dentistry",
  "Dermatology",
  "Endocrinology",
  "Gastroenterology",
  "General Practice",
  "Hematology",
  "Neurology",
  "Obstetrics & Gynecology",
  "Oncology",
  "Ophthalmology",
  "Orthopedics",
  "Otolaryngology",
  "Pediatrics",
  "Psychiatry",
  "Radiology",
  "Rheumatology",
  "Surgery",
];

const SidePanel = ({ onSpecialtyChange }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const handleSpecialtyChange = (event) => {
    setSelectedSpecialty(event.target.value);
    onSpecialtyChange(event.target.value);
  };

  return (
    <div className="side-panel">
      <h3>Specialties</h3>

      {specialties.sort().map((specialty) => (
        <div className="specialties">
          <label key={specialty}>
            <input
              type="radio"
              value={specialty}
              checked={selectedSpecialty === specialty}
              onChange={handleSpecialtyChange}
            />
            {specialty}
            <br />
          </label>
        </div>
      ))}

      <style jsx>{`
        .side-panel {
          background-color: #f5f5f5;
          width: fit-content;
          padding: 1rem;
        }
        .specialties {
          margin-top: 0.5rem;
        }
        label,
        input {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default SidePanel;
