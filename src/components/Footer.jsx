export default function Footer() {
  return (
    <>
      <footer className="footer-section py-5 bg-dark text-white">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <h3 className="h4 fw-bold mb-3">Edukonomi</h3>
              <p className="text-light">Platform edukasi ekonomi terkemuka yang berkomitmen untuk meningkatkan literasi ekonomi masyarakat Indonesia.</p>
              <div className="social-icons mt-4">
                <a href="#" className="text-white me-3 h4">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white me-3 h4">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-white me-3 h4">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-white h4">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-md-2 mb-4 mb-md-0">
              <h4 className="h5 fw-bold mb-3">Menu</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Tentang
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Kursus
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-4 mb-md-0">
              <h4 className="h5 fw-bold mb-3">Kursus</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Ekonomi Mikro
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Ekonomi Makro
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Finansial
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light text-decoration-none">
                    Investasi
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h4 className="h5 fw-bold mb-3">Kontak Kami</h4>
              <ul className="list-unstyled text-light">
                <li className="mb-2">
                  <i className="bi bi-geo-alt me-2"></i>
                  Jakarta, Indonesia
                </li>
                <li className="mb-2">
                  <i className="bi bi-envelope me-2"></i>
                  info@edukonomi.com
                </li>
                <li className="mb-2">
                  <i className="bi bi-phone me-2"></i>
                  +62 812 3456 7890
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-4 bg-light" />

          <div className="text-center text-light">
            <p className="mb-0">&copy; {new Date().getFullYear()} Edukonomi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
