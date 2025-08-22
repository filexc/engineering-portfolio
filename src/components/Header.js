import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Nav from './Nav';
import { projects, getFeaturedProjects, isProjectFeatured } from '../data/projects';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const featuredProjects = getFeaturedProjects();
  const nonFeaturedProjects = projects.filter(p => !isProjectFeatured(p.id));

  return (
    <header className="header">
      <div className="header-content">
        <Nav />
        <nav className="main-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/archive" className="nav-link">Archive</Link>
          
          <div className="dropdown" ref={dropdownRef}>
            <button className="dropdown-toggle" onClick={toggleMenu}>
              Projects
            </button>
            {isMenuOpen && (
              <div className="dropdown-menu">
                {featuredProjects.length > 0 && (
                  <div className="dropdown-section">
                    <h4>Featured Projects</h4>
                    {featuredProjects.map(project => (
                      <Link 
                        key={project.id} 
                        to={`/project/${project.id}`} 
                        className="dropdown-item"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {project.title}
                      </Link>
                    ))}
                  </div>
                )}
                {nonFeaturedProjects.length > 0 && (
                  <div className="dropdown-section">
                    <h4>All Projects</h4>
                    {nonFeaturedProjects.map(project => (
                      <Link 
                        key={project.id} 
                        to={`/project/${project.id}`} 
                        className="dropdown-item"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {project.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
