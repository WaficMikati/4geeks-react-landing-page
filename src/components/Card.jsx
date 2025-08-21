export function Card(props) {
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
      <div className="h-100 card text-center border-0 tbg">
        <a href={props.url}><img src={props.albumArt} className="card-img-top" /></a>
        <div className="card-title text-white fs-3 pt-3">
          <span className="fw-bold">{props.albumName}</span>
          <br />
          <span className="">{props.artistName}</span>
          <hr style={{ border: "1px solid #fff3"}}/>
        </div>
        <div className="card-body fs-4 text-white mt-0 pt-0 px-4">
          <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer p-3">
          <a className="w-100 btn btn-dark fs-4" href={props.url}>{props.button}</a>
        </div>
      </div>
    </div>
  )
}
