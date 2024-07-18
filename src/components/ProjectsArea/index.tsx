import { BackgroundTitle } from '../content-section';
import { ProjectCardWrapper, ProjectInfo, ProjectTecnologies, ProjectsSection } from './styles';
import { DefaultButton } from '../Button';

import lifecentershop from '../../../public/images/lifecentershop.png';
import acarauImg from '../../../public/images/acarau.png';
import blog from '../../../public/images/blog.png';
import credigi from '../../../public/images/credigi.png';


import { 
  SiTypescript,
  SiTailwindcss, 
  SiReact, 
  SiJavascript,
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiPhp,

} from "react-icons/si";
import { FaWordpress, FaElementor } from "react-icons/fa";

export const ProjectsArea = () => {
  return (
    <section>
        <ProjectsSection>
          <BackgroundTitle $left>PROJETOS</BackgroundTitle>
          <ProjectCard
            title="LifeCenter Shop"
            description="Atuei no desenvolvimento da plataforma LifeCenter Shop, um marketplace de saúde e bem-estar, onde aperfeiçoei minhas habilidades em PHP, Laravel e JavaScript. Contribuí na criação de interfaces, models e controllers, consolidando a prática da padrão MVC."
            technologies={[SiJavascript, SiLaravel, SiPhp]}
            image={lifecentershop}
            githubLink="https://github.com/IgorPierre/catalogo"
          />
          <ProjectCard
            title="Crédigi Promotora"
            description="Site institucional completo desenvolvido para a promotora de crédito Crédigi."
            technologies={[FaWordpress, FaElementor]}
            image={credigi}
            githubLink="http://credigipromotora.com.br/"
            $imageFirst
          />
          <ProjectCard
            title="LifeCenter Blog"
            description="Projeto desenvolvido durante minha atuação em uma empresa de software para a LifeCenter Shop, onde pude aperfeiçoar minhas habilidades com HTML, CSS e criação de temas Wordpress."
            technologies={[FaWordpress, SiHtml5, SiCss3]}
            image={blog}
            githubLink="https://blog.lifecentershop.com.br/"
          />
          <ProjectCard
            title="Site Acaraú Valley"
            description="Fruto da minha atuação na empresa Loading Jr., onde tive a oportunidade, juntamente com os outros membros da equipe, de implementar o site da startup Acaraú Valley."
            technologies={[SiTypescript, SiReact, SiTailwindcss]}
            image={acarauImg}
            githubLink="https://site-acarau-valley-beta.vercel.app/"
            $imageFirst
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
  