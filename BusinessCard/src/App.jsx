import Info from "../components/Info"
import About from "../components/About"
import Interests from "../components/Interests"
import Footer from "../components/Footer"

import './App.css'

function App() {

  return (
    <>
      <card className="businessCard">
          <Info />
          <About />
          <Interests />
          <Footer />
      </card>
    </>
  )
}

export default App
