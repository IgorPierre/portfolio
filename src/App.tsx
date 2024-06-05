import './App.css'
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
import { Banner } from './components/Banner';
import { ProjectCard, ProjectDescription } from './components/ProjectCard';
import catalogo from '../public/images/catalogo.png';

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
      <ContentSection $left $projects>
        <div>
          <h1>PROJETOS</h1>
          <ProjectCard>
            <ProjectDescription>
              <h3>Catálogo Interativo</h3>
              <p>
                Catálogo virtual desenvolvido para a loja Ave-Maria. Neste projeto o usuário
                consegue adicionar intens ao carrinho e finalizar a compra pelo WhatsApp
              </p>
            </ProjectDescription>
            <img src={catalogo} alt="imagem do projeto" />
          </ProjectCard>
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
