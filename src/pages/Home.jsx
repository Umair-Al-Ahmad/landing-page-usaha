import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import hdepan from "../assets/hdepan.jpg";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="home-page">
        {/* Jumbotron / Hero Section */}
        <section className="hero-section py-5 bg-success text-white">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 fw-bold mb-4">Selamat Datang di Edukonomi</h1>
                <p className="lead mb-4">Platform edukasi ekonomi terdepan yang membantu Anda memahami konsep ekonomi dengan mudah dan praktis. Mulai perjalanan belajar Anda bersama kami.</p>
                <div className="d-flex flex-wrap gap-3">
                  <button className="btn btn-light btn-lg px-4 py-3">Mulai Belajar</button>
                  <button className="btn btn-outline-light btn-lg px-4 py-3">Pelajari Lebih Lanjut</button>
                </div>
              </div>

              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="hero-image p-4 text-center">
                  <img src={hdepan} alt="Ilustrasi Edukasi Ekonomi" className="img-fluid rounded shadow" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section py-5">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Keunggulan Kami</h2>
              <p className="lead text-muted">Mengapa memilih platform edukasi ekonomi kami?</p>
            </div>

            <div className="row g-4">
              {[
                {
                  icon: "book",
                  title: "Materi Lengkap",
                  desc: "Akses materi ekonomi dari dasar hingga lanjutan dengan penjelasan yang mudah dipahami.",
                },
                {
                  icon: "people",
                  title: "Pengajar Berpengalaman",
                  desc: "Belajar dari pengajar profesional dengan pengalaman di bidang ekonomi dan finansial.",
                },
                {
                  icon: "laptop",
                  title: "Fleksibel",
                  desc: "Belajar kapan saja dan di mana saja melalui platform online dari berbagai device.",
                },
              ].map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      <i className={`bi bi-${item.icon} display-4 text-primary mb-3`}></i>
                      <h3 className="h4 fw-bold mb-3">{item.title}</h3>
                      <p className="text-muted">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="courses-section py-5 bg-light">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Kursus Populer</h2>
              <p className="lead text-muted">Pilih kursus yang sesuai dengan kebutuhan belajar Anda</p>
            </div>

            <div className="row g-4">
              {[1, 2, 3].map((course) => (
                <div className="col-md-4" key={course}>
                  <div className="card h-100 border-0 shadow-sm">
                    <img src={`https://via.placeholder.com/400x250/0d6efd/ffffff?text=Kursus+${course}`} className="card-img-top" alt={`Kursus ${course}`} />
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="badge bg-primary">Ekonomi</span>
                        <span className="text-warning">
                          <i className="bi bi-star-fill"></i> 4.8
                        </span>
                      </div>
                      <h3 className="h5 fw-bold mb-3">Dasar-dasar Ekonomi Mikro</h3>
                      <p className="text-muted mb-4">Pelajari konsep dasar ekonomi mikro dan penerapannya dalam kehidupan sehari-hari.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="h5 fw-bold text-primary">Rp 299.000</span>
                        <button className="btn btn-primary">Daftar Sekarang</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <button className="btn btn-outline-primary btn-lg px-5">Lihat Semua Kursus</button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section py-5">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Testimoni Siswa</h2>
              <p className="lead text-muted">Apa kata mereka tentang Edukonomi</p>
            </div>

            <div className="row g-4">
              {[1, 2, 3].map((t) => (
                <div className="col-md-4" key={t}>
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-4">
                        <img src={`https://i.pravatar.cc/100?img=${t}`} className="rounded-circle me-3" width="60" height="60" alt="User" />
                        <div>
                          <h6 className="fw-bold mb-0">John Doe</h6>
                          <small className="text-muted">Mahasiswa Ekonomi</small>
                        </div>
                      </div>
                      <p className="text-muted">“Materi sangat jelas dan mudah dipahami. Sangat membantu!”</p>
                      <div className="text-warning">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section py-5 bg-primary text-white">
          <div className="container py-5 text-center">
            <h2 className="display-5 fw-bold mb-4">Siap Memulai Perjalanan Belajar?</h2>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: "600px" }}>
              Bergabung dengan ribuan siswa lainnya sekarang juga.
            </p>
            <button className="btn btn-light btn-lg px-5 py-3">Daftar Sekarang - Gratis!</button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
