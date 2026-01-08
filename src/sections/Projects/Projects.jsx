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
          link="https://www.webwallet.tech/"
          h3="Web Wallet"
          p="Digital Wallet Application"
        />
        <ProjectCard
          src={freshBurger}
          link="https://ticketron.me/"
          h3="Ticketron"
          p="Query Management System"
        />
        <ProjectCard
          src={hipsster}
          link="https://job-portal-webapp.onrender.com/"
          h3="JobPortal"
          p="Job Application Platform"
        />
        
      </div>
    </section>
  );
}

export default Projects;
