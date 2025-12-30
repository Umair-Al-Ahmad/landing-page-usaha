import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../public/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* Logo di sini */}
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Edukonomi Logo" width="120" height="40" className="d-inline-block align-top" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              About
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
            <a className="nav-link" href="#">
              Services
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
