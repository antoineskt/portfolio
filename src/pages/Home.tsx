import Header from '../components/Header'
import Presentation from '../components/Presentation'
import Apropos from '../components/Apropos'
import Service from '../components/Service'
import Project from '../components/Projects'
function Home() {
  return (
    <div>
      <Header />
      <Presentation />
      <Apropos />
      <Service />
      <Project />
    </div>
  )
}

export default Home
