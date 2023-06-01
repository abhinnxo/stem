import { useState } from "react";
import WriteToCloudFirestore from "../firebase/Write";

const DoctorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    hospital: "",
    specialty: "",
    city: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data, e.g., send it to the server
    console.log(formData);
    alert("Form submitted Sucessfully!");
    // Reset the form
    setFormData({
      name: "",
      mobile: "",
      email: "",
      hospital: "",
      specialty: "",
      city: "",
      experience: "",
    });
  };

  return (
    <div className="registration-form container">
      <h2>Doctor Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hospital">Hospital</label>
          <input
            type="hospital"
            id="hospital"
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialty">Specialty</label>
          <input
            type="text"
            id="specialty"
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <WriteToCloudFirestore formData={formData} />

        {/* <button type="submit" className="register-button">
          Register
        </button> */}
      </form>
      <style jsx>{`
        .registration-form {
          max-width: 400px;
          margin: 0 auto;
        }

        .registration-form h2 {
          margin-top: 2rem;
          font-size: 2rem;
          font-weight: bold;
          color: #008080; /* color accent */
          margin-bottom: 16px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          font-size: 16px;
          color: #333;
          margin-bottom: 8px;
        }

        .form-group input {
          width: 100%;
          padding: 8px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        // .register-button {
        //   background-color: #008080; /* color accent */
        //   color: #fff;
        //   padding: 10px 16px;
        //   font-size: 16px;
        //   border: none;
        //   border-radius: 4px;
        //   cursor: pointer;
        // }

        // .register-button:hover {
        //   background-color: #006666; /* darker shade of color accent */
        // }
      `}</style>
    </div>
  );
};

export default DoctorRegistrationForm;
