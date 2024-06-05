// import { ReactNode } from 'react';
import { BackgroundTitle } from '../content-section';
import { ProjectCard, ProjectInfo, ProjectTecnologies, ProjectsSection } from './styles';
import catalogoImg from '../../../public/images/catalogo.png';
import { SiJavascript } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { DefaultButton } from '../Button';

export const ProjectsArea = () => {
  return (
    <section>
        <ProjectsSection>
          <BackgroundTitle $left>PROJETOS</BackgroundTitle>
          <ProjectCard>
            <ProjectInfo>
              <h3>Catalogo interativo</h3>
              <p>
                Catálogo virtual desenvolvido para a loja Ave-Maria. Neste projeto o usuário consegue 
                adicionar intens ao carrinho e finalizar a compra pelo WhatsApp
              </p>
              <ProjectTecnologies>
                <SiJavascript />
                <SiLaravel />
              </ProjectTecnologies>
              <DefaultButton link='#' children='Visualizar'/>
            </ProjectInfo>
            <img src={catalogoImg} alt="imagem do projeto" />
          </ProjectCard>
        </ProjectsSection>
    </section>
  );
};