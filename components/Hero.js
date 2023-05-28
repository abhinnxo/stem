import Image from "next/image";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  const handleClick = () => {
    // e.preventDefault();
    router.push("/directory"); //#endregion
    console.log("The link was clicked.");
  };

  return (
    <section>
      <div className="hero-image">
        <Image
          src="/images/doctor.jpg"
          alt="Doctor with stethoscope"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="hero-content">
        <h1>Book an Appointment with a Doctor</h1>
        <p>
          Find the right doctor for your needs and schedule an appointment
          today.
        </p>
        <button onClick={handleClick}>Book Now</button>
      </div>
      <style jsx>{`
        section {
          position: relative;
          height: 500px;
        }
        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .hero-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #fff;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }
        button {
          padding: 1rem 2rem;
          border-radius: 4px;
          font-size: 1.25rem;
          font-weight: bold;
          background-color: #008080;
          color: #fff;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default Hero;
