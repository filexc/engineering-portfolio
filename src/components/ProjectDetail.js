import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <section className="project-header">
        <Link to="/" className="back-button">← Back to Home</Link>
        <h1>{project.title}</h1>
        <p className="project-date">{new Date(project.date).toLocaleDateString()}</p>
      </section>

      <section className="project-overview">
        <div className="flagship-image">
          <img src={project.flagshipImage} alt={project.title} />
        </div>
        <div className="project-description">
          <h2>Project Overview</h2>
          <p>{project.fullDescription}</p>
          <div className="project-skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-list">
              {project.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="project-gallery">
        <h2>Project Gallery</h2>
        <div className="gallery-grid">
          {project.images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.description} />
              <p className="image-description">{image.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="project-navigation">
        <Link to="/" className="nav-button">← Back to Home</Link>
        <Link to="/archive" className="nav-button">View Archive</Link>
      </section>
    </div>
  );
};

export default ProjectDetail;
