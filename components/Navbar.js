import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarComp = () => {
  return (
    <header>
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand
            style={{
              color: "#ffffff",
            }}
            href="/"
          >
            STEM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                style={{
                  color: "#ffffff",
                }}
                href="/directory"
              >
                Find Doctors
              </Nav.Link>
              <NavDropdown title="View More" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="https://www.organindia.org/"
                  target="_blank"
                >
                  Organ Donation
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://beds.dgmhup-covid19.in/EN/covid19bedtrack"
                  target="_blank"
                >
                  Hospital Beds
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.1mg.com/" target="_blank">
                  Pharmacy
                </NavDropdown.Item>
              </NavDropdown>
              <Link
                href="/register-yourself-as-a-doctor"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#008080",
                  borderRadius: "5px 15px",
                  padding: "10px",
                }}
              >
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #008080;
          color: #ffffff;
        }
        ul {
          display: flex;
          width: 100vw;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        li {
          margin: 0 1rem;
        }
        .color-white {
          color: #ffffff !important;
          text-decoration: none;
        }
      `}</style>
    </header>
  );
};

export default NavbarComp;
