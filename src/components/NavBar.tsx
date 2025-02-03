import '../css/NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faM } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Scroll to the section after the URL changes (based on hash)
    const section = location.hash && document.querySelector(location.hash);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Scroll to the top for the Home link
    if (location.hash === '#home') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const onUpdateActiveLink = (value: any) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={`${scrolled ? "scrolled" : ""} shadow-effect`}>
      <Container className='navbar-container'>
        <Navbar.Brand as={Link} to="/">
          <div className='navbar-logo d-flex'>
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
              to="/#home"
              className={activeLink === 'home' ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/#about"
              className={activeLink === 'about' ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink('about')}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/#skills"
              className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="https://www.linkedin.com/in/melvin-moes-49652a290/">
                <FontAwesomeIcon className="social-svg" icon={faLinkedinIn} />
              </a>
              <a href="https://github.com/MelvinQM">
                <FontAwesomeIcon className="social-svg" icon={faGithub} />
              </a>
            </div>
            <button onClick={() => console.log("Connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
