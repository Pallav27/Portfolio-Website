import styles from './CodingplatformsStyles.module.css';
import viberr from '../../assets/newspaper.png';
import freshBurger from '../../assets/face.png';
import hipsster from '../../assets/sign.png';
import ProjectCard from '../../common/ProjectCard';
import lcimage from '../../assets/lcimage.png';
import cfimage from '../../assets/cfimage.png';
import gtimage from '../../assets/gtimage.png';

function Projects() {
  return (
    <section id="Coding Platforms" className={styles.container}>
      <h1 className="sectionTitle">Coding Platforms</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={cfimage}
          link="https://codeforces.com/profile/pallavshrm27"
          h3="Codeforces"
          p="Specialist at Codeforces"
        />
        <ProjectCard
          src={lcimage}
          link="https://leetcode.com/u/pallavshrm27/"
          h3="Leetcode"
          p="Knight at Leetcode"
        />
        <ProjectCard
          src={gtimage}
          link="https://github.com/Pallav27"
          h3="Github"
          p="Github Profile"
        />
        
      </div>
    </section>
  );
}

export default Projects;
