import Image from "next/image";

const About = () => {
  return (
    <div className="about">
      <div className="content">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in
          tortor quis odio consectetur convallis. Sed congue malesuada mi id
          consequat. Nulla vestibulum est sit amet justo tincidunt, sit amet
          aliquet arcu pellentesque. In euismod massa vel pharetra
        </p>
      </div>
      <div className="images">
        <Image
          src="/images/doctor-1.jpg"
          alt="Doctor 1"
          width={300}
          height={200}
        />
        <Image
          src="/images/doctor-2.jpg"
          alt="Doctor 2"
          width={300}
          height={200}
        />
        <Image
          src="/images/doctor-3.jpg"
          alt="Doctor 3"
          width={300}
          height={200}
        />
      </div>
      <style jsx>{`
        .about {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 2rem;
        }
        .content {
          max-width: 500px;
          margin-right: 2rem;
        }
        h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
        }
        p {
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 2rem;
        }
        .images {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        .images > :global(img) {
          margin: 1rem;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default About;
