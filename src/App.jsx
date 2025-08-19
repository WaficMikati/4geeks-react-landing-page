import './App.css'
import { Card } from './components/Card'
import { Jumbotron } from './components/Jumbotron'
import { Navbar } from './components/Navbar'
import albums from "./albums.json"


function App() {
  return (
    <div className="d-grid vh-100">
      <Navbar />
      <div className="container-fluid overflow-auto px-5" id="main">
        <Jumbotron />
        {Object.entries(albums).map(([region, albumList]) => (
          <div key={"region"+ region} className='text-white mb-5' id={region}>
            <div className='py-1 rounded-5' style={{ background: '#111d'}}>
              <h1 className='text-end display-3 fw-bold m-5'>{region}</h1>
              <div className="row justify-content-center g-sm-1 g-md-2 g-lg-3 g-xl-4 ">
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
    </div>
  );
}


export default App
