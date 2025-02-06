import '../css/NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faM } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY; // Store last scroll position
  
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (Math.abs(currentScrollY - lastScrollY) > 40) {
        setScrolled(currentScrollY > 65);
        lastScrollY = currentScrollY;
      }
    };
  
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  

  useEffect(() => {
    const section = hash && document.querySelector(hash);
    
    if (section) section.scrollIntoView({ behavior: 'smooth' });

    if (hash === '#home') window.scrollTo(0, 0);
  }, [hash]);

  const onUpdateActiveLink = useCallback((value: string) => {
    setActiveLink(value);
  }, []);

  return (
    <Navbar expand="md" className={`${scrolled ? 'scrolled' : ''} shadow-effect`}>
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/portfolio-website/">
          <div className="navbar-logo d-flex">
            <FontAwesomeIcon className="navbar-logo-border" icon={faSquare} />
            <FontAwesomeIcon className="navbar-logo-m-left" icon={faM} />
            <FontAwesomeIcon className="navbar-logo-m-right" icon={faM} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/portfolio-website/#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/portfolio-website/#about"
              className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('about')}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/portfolio-website/#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/portfolio-website/projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/melvin-moes-49652a290/">
                <FontAwesomeIcon className="social-svg" icon={faLinkedinIn} />
              </a>
              <a href="https://github.com/MelvinQM">
                <FontAwesomeIcon className="social-svg" icon={faGithub} />
              </a>
            </div>
            <button onClick={() => console.log('Connect')}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
