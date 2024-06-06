import './App.css'
import { BackgroundTitle, ContentSection } from './components/content-section'
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
import { Banner } from './components/Banner';
import { ProjectsArea } from './components/ProjectsArea';

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
          <BackgroundTitle>TECNOLOGIAS</BackgroundTitle>
          <SiJavascript />
          <SiTypescript />
          <SiReact />
          <SiTailwindcss />
          <FaSass />
          <FaPhp />
          <FaLaravel />
        </div>
      </ContentSection>
      <ProjectsArea />
      <ContentSection $contact>
        <div>
          <BackgroundTitle>CONTATOS</BackgroundTitle>
          <a href="https://github.com/IgorPierre"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/igorpierre/"><FaLinkedin /></a>
          <a href="mailto:igor.pierre45@gmail.com"><HiOutlineMail /></a>
          <a href="https://www.instagram.com/igor.pierre7/"><SiInstagram /></a>
        </div>
      </ContentSection>
      <Copyright>Powered by Igor Pierre</Copyright>
    </>
  )
}

export default App
