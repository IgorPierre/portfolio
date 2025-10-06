import './App.css'
import { BackgroundTitle, ContentSection } from './components/content-section'
import { 
  SiTypescript,
  SiTailwindcss, 
  SiReact, 
} from "react-icons/si";
import { FaSass, FaLaravel, FaPhp, FaGithub, FaLinkedin, FaDocker, FaAws} from "react-icons/fa";
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
          Desenvolvedor Full Stack
        </h2>
      </Banner>
      <ContentSection>
        <div className="content">
          <BackgroundTitle>TECNOLOGIAS</BackgroundTitle>
          <div className="item">
            <SiTypescript />
            Typescript
          </div>
          <div className="item">
            <SiReact />
            React
          </div>
          <div className="item">
            <SiTailwindcss />
            Tailwindcss
          </div>
          <div className="item">
            <FaSass />
            Sass
          </div>
          <div className="item">
            <FaPhp />
            Php
          </div>
          <div className="item">
            <FaLaravel />
            Laravel
          </div>
          <div className="item">
            <FaDocker />
            Docker
          </div>
          <div className="item">
            <FaAws />
            AWS
          </div>
        </div>
      </ContentSection>
      <ProjectsArea />
      <ContentSection $contact>
        <div className="content">
          <BackgroundTitle>CONTATOS</BackgroundTitle>
          <div className="item">
            <a href="https://github.com/IgorPierre"><FaGithub /></a>
          </div>
          <div className="item">
            <a href="https://www.linkedin.com/in/igorpierre/"><FaLinkedin /></a>
          </div>
          <div className="item">
            <a href="mailto:igor.pierre45@gmail.com"><HiOutlineMail /></a>
          </div>
        </div>
      </ContentSection>
      <Copyright>
        <small>Powered by Igor Pierre</small>
      </Copyright>
    </>
  )
}

export default App
