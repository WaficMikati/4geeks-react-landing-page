import { Jumbotron } from './Jumbotron'
import { Card } from './Card'
import albums from "../data/albums.json"

export function Content() {
  return (
    <div className="container-fluid overflow-auto px-lg-5" id="main">
      <Jumbotron />
      {Object.entries(albums).map(([region, albumList]) => (
        <div key={"region"+ region} className='text-white mb-5' id={region}>
          <div className='py-1 rounded-5' style={{ background: '#111d'}}>
            <h1 className='text-end display-3 fw-bold m-5'>{region}</h1>
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
                  />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
