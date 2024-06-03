import './App.css'
import { Banner } from './components/Banner'
import { ContentSection } from './components/content-section'
import { 
  SiTypescript,
  SiTailwindcss, 
  SiReact, 
  SiJavascript 
} from "react-icons/si";
import { FaSass, FaLaravel, FaPhp } from "react-icons/fa";

function App() {
  return (
    <>
      <Banner>
        <h1>
          Igor Pierre
        </h1>
        <h2>
          Desenvolvedor Front-End
        </h2>
      </Banner>
      <ContentSection>
        <div>
          <h1>TECNOLOGIAS</h1>
          <SiJavascript />
          <SiTypescript />
          <SiReact />
          <SiTailwindcss />
          <FaSass />
          <FaPhp />
          <FaLaravel />
        </div>
      </ContentSection>
    </>
  )
}

export default App
