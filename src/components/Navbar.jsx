export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
      <div className="container-fluid">
        <a href="https://sikuthenomad.com" className="navbar-brand fs-4">
          siKu<br />tHe<br />NoMAd
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-end" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-5 ms-auto">
            <a className="nav-link" href="#South America">South America</a>
            <a className="nav-link" href="#Middle East">Middle East</a>
            <a className="nav-link" href="#Africa">Africa</a>
            <a className="nav-link" href="#Far East">Far East</a>
            <a className="nav-link" href="#Europe">Europe</a>
            <a className="nav-link" href="#Oceania">Oceania</a>
            <a className="nav-link" href="#North America">North America</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
