export function Jumbotron(props) {
  return (
    <div 
      className="container-fluid text-white rounded-5 p-5 my-5 tbg" 
      id="jumbotron"
    >
      <h1 className="display-4 fw-bold">{props.content.title}</h1>
      <p className="col-xl-8 my-4 lead fs-3">
        {props.content.text} 
      </p>
      <a href="https://sikuthenomad.com" className="btn btn-lg fs-4 text-white">{props.content.button}</a>
    </div>
  )
}
