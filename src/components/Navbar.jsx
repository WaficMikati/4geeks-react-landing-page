export function Navbar(props) {
  const regions = Object.entries(Object.entries(props)[0][1]).map((e) => { return e[0] })
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
            {regions.map((region, i) => (
              <a key={i} className="nav-link" href={`#${region}`}>{region}</a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
