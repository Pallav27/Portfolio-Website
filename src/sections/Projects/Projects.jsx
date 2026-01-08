import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/newspaper.png';
import freshBurger from '../../assets/face.png';
import hipsster from '../../assets/sign.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Pallav27/Retro-Newspaper"
          h3="Web Wallet"
          p="Landing Page"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Pallav27/Text-To-Emoji/tree/main/TextToEmojiEncDec"
          h3="Texmoji"
          p="Text-to-Emoji Converter"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Pallav27/SignSave"
          h3="Sign&Save"
          p="Digital Signature Website"
        />
        
      </div>
    </section>
  );
}

export default Projects;
