import { Jumbotron } from "./Jumbotron.jsx"
import { Card } from "./Card.jsx"

export function Content(props) {
  return (
    <div className="container-fluid overflow-auto px-lg-5" id="main">
      <Jumbotron content={props.content.jumbotron}/>
      {Object.entries(props.albums).map(([region, albumList]) => (
        <div key={"region"+ region} className='text-white mb-5' id={region}>
          <div className='pt-1 rounded-5 tbg'>
            <h1 className='text-center text-sm-end display-2 fw-bold py-5 pe-sm-5 region-title'>{region}</h1>
            <div className="row justify-content-center g-4">
              {Object.entries(albumList).map(([id, album]) => (
                album.url === "" ? "" :
                  <Card
                    key={id}
                    albumArt={album.albumArt}
                    albumName={album.albumName}
                    artistName={album.artistName}
                    description={album.description}
                    url={album.url}
                    button={props.content.cardButton}
                  />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
