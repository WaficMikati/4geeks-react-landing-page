export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" id="navbar">
      <div className="container-fluid">
        <a href="#" className="navbar-brand fs-2">
          SikuTheNomad
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto fs-3">
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Services</a>
            <a className="nav-link" href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
