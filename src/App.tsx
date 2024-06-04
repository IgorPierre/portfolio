import './App.css'
import { Banner } from './components/banner'
import { ContentSection } from './components/content-section'
import { 
  SiTypescript,
  SiTailwindcss, 
  SiReact, 
  SiJavascript,
  SiInstagram
} from "react-icons/si";
import { FaSass, FaLaravel, FaPhp, FaGithub, FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Copyright } from './components/copyright';

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
      <ContentSection $left>
        <div>
          <h1>PROJETOS</h1>
          <p>a caminho...</p>
        </div>
      </ContentSection>
      <ContentSection $contact>
        <div>
          <h1>CONTATOS</h1>
          <FaGithub />
          <FaLinkedin />
          <HiOutlineMail />
          <SiInstagram />
        </div>
      </ContentSection>
      <Copyright>Powered by Igor Pierre</Copyright>
    </>
  )
}

export default App
