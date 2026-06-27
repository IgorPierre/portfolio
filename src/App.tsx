import { Banner } from './components/Banner';
import { ContactSection } from './components/ContactSection';
import { Copyright } from './components/copyright';
import { ProjectsArea } from './components/ProjectsArea';
import { TechnologiesSection } from './components/TechnologiesSection';
import { contacts } from './data/contacts';
import { profile } from './data/profile';
import { projects } from './data/projects';
import { technologies } from './data/technologies';

function App() {
  return (
    <>
      <Banner name={profile.name} role={profile.role} />
      <TechnologiesSection items={technologies} />
      <ProjectsArea projects={projects} />
      <ContactSection items={contacts} />
      <Copyright text={profile.copyright} />
    </>
  );
}

export default App;
