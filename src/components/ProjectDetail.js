import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProjectById, formatProjectDate } from '../data/projects';
import { getImagePath } from '../utils/imageUtils';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollMedia = (direction) => {
    const container = document.querySelector('.media-scroll-container');
    if (container) {
      const scrollAmount = 450; // Width of item + gap
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const updateArrowVisibility = () => {
    const container = document.querySelector('.media-scroll-container');
    if (container) {
      const isAtStart = container.scrollLeft === 0;
      const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 1;
      
      setShowLeftArrow(!isAtStart);
      setShowRightArrow(!isAtEnd);
    }
  };

  useEffect(() => {
    updateArrowVisibility();
    const container = document.querySelector('.media-scroll-container');
    if (container) {
      container.addEventListener('scroll', updateArrowVisibility);
      return () => container.removeEventListener('scroll', updateArrowVisibility);
    }
  }, [project]);

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
        <p className="project-date">{formatProjectDate(project.date)}</p>
      </section>

      <section className="project-overview">
        <div className="flagship-image">
          <img src={getImagePath(project.flagshipImage)} alt={project.title} />
        </div>
        <div className="project-description">
          <h2>Project Overview</h2>
          <p>{project.fullDescription}</p>
          {project.repository && (
            <div className="repository-link-inline">
              <a 
                href={project.repository.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="repo-button-small"
              >
                <svg className="github-icon-small" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on {project.repository.platform}
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="project-skills-section">
        <h3>Skills & Technologies</h3>
        <div className="skills-list">
          {project.skills.map((skill, index) => (
            <span 
              key={index} 
              className="skill-tag"
              title={typeof skill === 'string' ? skill : skill.description}
            >
              {typeof skill === 'string' ? skill : skill.name}
            </span>
          ))}
        </div>
      </section>

      {project.media && project.media.length > 0 && (
        <section className="project-media">
          <h2>Project Gallery</h2>
          <div className="media-scroll-wrapper">
            {showLeftArrow && (
              <button className="scroll-arrow scroll-left" onClick={() => scrollMedia('left')}>
                ‹
              </button>
            )}
            <div className="media-scroll-container">
              <div className="media-scroll">
                {project.media.map((item, index) => (
                  <div key={index} className="media-item">
                    {item.type === "video" ? (
                      item.src.includes('youtube.com') ? (
                        <iframe
                          src={item.src}
                          title={item.description}
                          className="media-content"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <video 
                          src={item.src} 
                          controls 
                          className="media-content"
                          poster={getImagePath("/images/video-poster.jpg")}
                        >
                          Your browser does not support the video tag.
                        </video>
                      )
                    ) : (
                      <img 
                        src={getImagePath(item.src)} 
                        alt={item.description} 
                        className="media-content"
                      />
                    )}
                    <p className="media-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {showRightArrow && (
              <button className="scroll-arrow scroll-right" onClick={() => scrollMedia('right')}>
                ›
              </button>
            )}
          </div>
        </section>
      )}

      <section className="project-navigation">
        <Link to="/" className="nav-button">← Back to Home</Link>
        <Link to="/archive" className="nav-button">View Archive</Link>
      </section>
    </div>
  );
};

export default ProjectDetail;
