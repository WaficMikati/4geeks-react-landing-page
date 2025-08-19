export function Jumbotron() {
  return (
    <div 
      className="container-fluid text-white rounded-5 p-5 my-5" 
      style={{ background: "#111d" }}
      id="jumbotron"
    >
      <h1 className="display-5 fw-bold">Around the Global South</h1>
      <p className="col-xl-8 my-4 lead fs-4">
        Over many years living a nomadic life of constant migration, I have grown a taste of a wide selection of roots music, especially when synths began to influence folkloric musicsian. Here I share a curated list of some of my favorite music albums and compilations from my travels. I hope you enjoy my selection.
      </p>
      <a href="https://sikuthenomad.com" className="btn btn-lg text-white" style={{ background: "#111e"}}>About me</a>
    </div>
  )
}
