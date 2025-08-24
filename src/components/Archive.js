import { Link } from 'react-router-dom';
import { getArchivedProjects, isProjectFeatured } from '../data/projects';
import './Archive.css';

const Archive = () => {
  const archivedProjects = getArchivedProjects();

  return (
    <div className="archive">
      <section className="archive-header">
        <h1>Project Archive</h1>
        <p>Explore all my engineering and technical projects from high school and beyond.</p>
      </section>

      <section className="archived-projects">
        <div className="projects-grid">
          {archivedProjects.map((project) => (
            <div key={project.id} className={`project-card ${isProjectFeatured(project.id) ? 'featured' : ''}`}>
              {isProjectFeatured(project.id) && (
                <div className="featured-badge">New</div>
              )}
              <div className="project-image">
                <img src={project.flagshipImage} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <div className="project-skills">
                  {project.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {typeof skill === 'string' ? skill : skill.name}
                    </span>
                  ))}
                </div>
                <Link to={`/project/${project.id}`} className="read-more">
                  View Project Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="back-to-home">
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
};

export default Archive;
