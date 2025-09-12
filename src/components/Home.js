import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '../data/projects';
import { getImagePath } from '../utils/imageUtils';
import './Home.css';

const Home = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="home">
      <section className="featured-projects">
        <h2>Recent Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`} className="project-card-link">
              <div className="project-card">
                <div className="project-image">
                  <img src={getImagePath(project.flagshipImage)} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  <span className="read-more">
                    Read more here
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="archive-link">
        <h3>Explore More Projects</h3>
        <p>Check out my complete project archive to see all my work.</p>
        <Link to="/archive" className="archive-button">
          View Archive
        </Link>
      </section>

      <section className='manifesto'>
        <h2>Declaration of Values</h2>
        <div className="manifesto-content">
          <ul className="manifesto-list">
            <li>Good design should be both functional and aesthetic, and improve people's lives.</li>
            <li>Design and technology should solve complex problems in our world.</li>
            <li>Good design is accessible.</li>
            <li>The designer's job is to create solutions that solve problems that the affected communities need/want.</li>
            <li>Good design does not have negative impacts on the environment or the workers.</li>
            <li>Design should come from a place of curiosity and empathy, with a critical eye toward potential negative consequences.</li>
            <li>Good design eases concerns of the public, rather than introducing more anxieties.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
