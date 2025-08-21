import { useState } from 'react'
import { Navbar } from './components/Navbar.jsx'
import { Content } from './components/Content.jsx'
import albumsEn from './data/en/albums.json'
import albumsEs from './data/es/albums.json'
import siteContentEn from './data/en/siteContent.json'
import siteContentEs from './data/es/siteContent.json'
import './styles/App.css'

function App() {
  const [language, setLanguage] = useState('en');

  const allData = {
    en: { albums: albumsEn, siteContent: siteContentEn },
    es: { albums: albumsEs, siteContent: siteContentEs }
  }

  const { albums, siteContent } = allData[language]

  return (
    <div className="d-grid vh-100">
      <Navbar ref={albums} lang={language} changeLanguage={setLanguage}/>
      <Content albums={albums} content={siteContent}/>
    </div>
  )
}
export default App
