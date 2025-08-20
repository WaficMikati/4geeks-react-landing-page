import './styles/App.css'
import { Navbar } from './components/Navbar.jsx'
import { Content } from './components/Content.jsx'
import albums from './data/en/albums.json'
import siteContent from './data/en/siteContent.json'

function App() {
  console.log("App: ", siteContent)
  return (
    <div className="d-grid vh-100">
      <Navbar ref={albums} />
      <Content albums={albums} content={siteContent}/>
    </div>
  );
}

export default App
