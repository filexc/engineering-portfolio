import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '../data/projects';
import './Home.css';

const Home = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="home">
      {/* <section className="hero">
        <h1>Welcome to My Engineering Portfolio</h1>
        <p>Exploring the intersection of creativity, problem-solving, and technical skills through hands-on projects.</p>
      </section> */}

      <section className="featured-projects">
        <h2>Recent Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.flagshipImage} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <Link to={`/project/${project.id}`} className="read-more">
                  Read more here
                </Link>
              </div>
            </div>
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
    </div>
  );
};

export default Home;
