import Header from '../components/Header'
import Presentation from '../components/Presentation'
import Apropos from '../components/Apropos'
import Service from '../components/Service'
import Project from '../components/Projects'
import Contact from '../components/Contact'
import Competence from '../components/Competence'
function Home() {
  return (
    <div>
      <Header />
      <Presentation />
      <Apropos />
      <Service />
      <Project />
      <Competence />
      <Contact />
    </div>
  )
}

export default Home
