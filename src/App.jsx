import './styles/App.css'
import { Navbar } from './components/Navbar.jsx'
import { Content } from './components/Content.jsx'

function App() {
  return (
    <div className="d-grid vh-100">
      <Navbar />
      <Content />
    </div>
  );
}


export default App
