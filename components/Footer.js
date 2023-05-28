const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5>Address</h5>
            <p>
              XYZ Company
              <br />
              123 Main Street
              <br />
              Mumbai, Maharashtra
              <br />
              India
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h5>Contact Us</h5>
            <ul>
              <li>Phone: +91-123-456-7890</li>
              <li>Email: info@xyzcompany.com</li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: #f5f5f5;
          padding: 3rem 0;
          margin-top: 3rem;
        }
        h5 {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin-bottom: 0.5rem;
        }
        li a:hover {
          color: #008080;
        }
        p {
          margin-bottom: 1rem;
        }
        .container {
          max-width: 960px;
          margin: 0 auto;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
