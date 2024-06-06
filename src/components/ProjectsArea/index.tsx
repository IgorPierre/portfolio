import { BackgroundTitle } from '../content-section';
import { ProjectCardWrapper, ProjectInfo, ProjectTecnologies, ProjectsSection } from './styles';
import { DefaultButton } from '../Button';

import catalogoImg from '../../../public/images/catalogo.png';
import acarauImg from '../../../public/images/acarau.png';
import blog from '../../../public/images/blog.png';

import { 
  SiTypescript,
  SiTailwindcss, 
  SiReact, 
  SiJavascript,
  SiLaravel,
  SiHtml5,
  SiCss3,

} from "react-icons/si";
import { FaWordpress } from "react-icons/fa";

export const ProjectsArea = () => {
  return (
    <section>
        <ProjectsSection>
          <BackgroundTitle $left>PROJETOS</BackgroundTitle>
          <ProjectCard
            title="Catalogo interativo"
            description="Catálogo virtual desenvolvido para a loja Ave-Maria. Neste projeto o usuário consegue adicionar itens ao carrinho e finalizar a compra pelo WhatsApp."
            technologies={[SiJavascript, SiLaravel]}
            image={catalogoImg}
            githubLink="https://github.com/IgorPierre/catalogo"
          />
          <ProjectCard
            title="Site Acaraú Valley"
            description="Fruto da minha atuação na empresa Liading Jr., onde tive a oportunidade, juntamente com os outros membros da equipe, de implementar o site da startup Acaraú Valley."
            technologies={[SiTypescript, SiReact, SiTailwindcss]}
            image={acarauImg}
            githubLink="https://site-acarau-valley-beta.vercel.app/"
            $imageFirst
          />
          <ProjectCard
            title="LifeCenter Blog"
            description="Projeto freelance desenvolvido para a empresa LifeCenter Shop, onde pude aperfeiçoar minhas habilidades com HTML, CSS e criação de temas Wordpress."
            technologies={[FaWordpress, SiHtml5, SiCss3]}
            image={blog}
            githubLink="https://blog.lifecentershop.com.br/"
          />
        </ProjectsSection>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: React.ComponentType<any>[];
  image: string;
  githubLink: string;
  $imageFirst?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const isMobile = window.innerWidth < 768;

  return (
    <ProjectCardWrapper>
      {props.$imageFirst ? (
        <>
          <img src={props.image} alt="imagem do projeto" />
          <ProjectInfo>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <ProjectTecnologies>
              {props.technologies.map((TechIcon, index) => (
                <TechIcon key={index} />
              ))}
            </ProjectTecnologies>
            <DefaultButton link={props.githubLink}>Visualizar</DefaultButton>
          </ProjectInfo>
        </>
      ) : (
        <>
          {isMobile ? (
            <>
              <img src={props.image} alt="imagem do projeto" />
              <ProjectInfo>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <ProjectTecnologies>
                  {props.technologies.map((TechIcon, index) => (
                    <TechIcon key={index} />
                  ))}
                </ProjectTecnologies>
                <DefaultButton link={props.githubLink}>Visualizar</DefaultButton>
              </ProjectInfo>
            </>
          ) : (
            <>
              <ProjectInfo>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <ProjectTecnologies>
                  {props.technologies.map((TechIcon, index) => (
                    <TechIcon key={index} />
                  ))}
                </ProjectTecnologies>
                <DefaultButton link={props.githubLink}>Visualizar</DefaultButton>
              </ProjectInfo>
              <img src={props.image} alt="imagem do projeto" />
            </>
          )}
        </>
      )}
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
  