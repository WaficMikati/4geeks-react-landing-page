import './App.css'
import { Card } from './components/Card'
import { Jumbotron } from './components/Jumbotron'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="container-fluid p-5">
        <Jumbotron />
        <div className="row mt-5">
          <Card src="https://f4.bcbits.com/img/a2023934244_16.jpg" desc="Chicha Libre celebrate early seventies Peruvian music styles which mixed cumbia and funk with Andean melodies, Cuban son, and heady swirls of surf guitar, farfisa organ and moog synth" />
          <Card src="https://f4.bcbits.com/img/a2023934244_16.jpg" desc="Chicha Libre celebrate early seventies Peruvian music styles which mixed cumbia and funk with Andean melodies, Cuban son, and heady swirls of surf guitar, farfisa organ and moog synth" />
          <Card src="https://f4.bcbits.com/img/a2023934244_16.jpg" desc="Chicha Libre celebrate early seventies Peruvian music styles which mixed cumbia and funk with Andean melodies, Cuban son, and heady swirls of surf guitar, farfisa organ and moog synth" />
          <Card src="https://f4.bcbits.com/img/a2023934244_16.jpg" desc="Chicha Libre celebrate early seventies Peruvian music styles which mixed cumbia and funk with Andean melodies, Cuban son, and heady swirls of surf guitar, farfisa organ and moog synth" />
        </div>
      </div>
    </>
  )
}

export default App
