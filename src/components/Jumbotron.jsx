import { useState, useEffect } from "react"

export function Jumbotron() {
  const [navHeight, setNavHeight] = useState(0)

  useEffect(() => {
    const navbar = document.querySelector("#navbar")
    setNavHeight(navbar.offsetHeight)
    console.log(navHeight)
  }, [])
  
  return (
    <div className="container-fluid bg-body-secondary rounded-5 p-5" style={{ marginTop: navHeight}}>
      <h1 className="display-4 fw-bold mb-3">Landing Page!</h1>
      <p className="col fs-3">
        Test text goes here.
      </p>
      <button className="btn btn-primary btn-lg fs-4" type="button">Test</button>
    </div>
  )
}
