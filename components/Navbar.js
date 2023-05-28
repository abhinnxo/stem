import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <h1>STEM</h1>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/directory">Directory</Link>
          </li>
          <li>
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
          </li>
        </ul>
      </nav>
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
        link {
          color: #ffffff;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
