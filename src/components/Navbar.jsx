export function Navbar(props) {
  const regions = Object.entries(Object.entries(props)[0][1]).map((e) => { 
    return e[0] 
  })

  function changeLanguage(newLanguage) {
    props.changeLanguage(newLanguage);
  }

  return (
    <nav className="navbar navbar-expand-xl navbar-dark" id="navbar">
      <div className="container-fluid">
        <a href="https://sikuthenomad.com" className="navbar-brand my-1 fs-3">
          siKu<br />tHe<br />NoMAd
        </a>

        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-end" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-4 mx-auto">
            {regions.map((region, i) => (
              <a key={i} className="nav-link" href={`#${region}`}>{region}</a>
            ))}
          </div>

          <div className="dropdown my-md-3 my-lg-0">
            <button className="btn btn-dark text-white opacity-50 fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              🌏︎
              <span className="ms-1">{props.lang.toUpperCase()}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end fs-5">
              <li><button className="dropdown-item" onClick={() => changeLanguage('en')}>English</button></li>
              <li><button className="dropdown-item" onClick={() => changeLanguage('es')}>Español</button></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
