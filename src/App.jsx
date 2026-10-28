import About from "./sections/About"
import Header from "./sections/Header"
import Title from "./sections/Title"
import Projects from "./sections/Projects"
import Achievements from "./sections/Achievements"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Education from "./sections/Education"

function App() {

  return (
    <> <div className="bg-black">
    <Header/>
     <Title/>
     <About/>
     <Projects/>
     <Education/>
     <Achievements/>
     <Contact/>
     <Footer/>
     </div>
      </>
  )
}

export default App
