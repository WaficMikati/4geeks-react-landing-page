export function Card(props) {
  return (
    <div className="col-md mb-4">
      <div className="card text-center">
        <img src={props.src} className="card-img" />
        <div className="card-body">
        <div class="card-title fs-3 fw-bold m-3">
          Chicha Libre
        </div>
          <p className="card-text fs-5">{props.desc}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary fs-5" type="button">More info</button>
        </div>
      </div>
    </div>
  )
}
