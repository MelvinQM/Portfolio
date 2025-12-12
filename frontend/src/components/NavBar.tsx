import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { SocialLinks } from "../constants";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const { pathname, hash } = useLocation();

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const onScroll = () => {
            const currentScrollY = window.scrollY;

            if (Math.abs(currentScrollY - lastScrollY) > 40) {
                setScrolled(currentScrollY > 65);
                lastScrollY = currentScrollY;
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        // If navigating to a normal route (like /projects)
        if (!hash) {
            window.scrollTo({ top: 0, left: 0 });
            return;
        }

        // If navigating to a hash section
        const section = document.querySelector(hash);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }, [pathname, hash]);

    const onUpdateActiveLink = useCallback((value: string) => {
      setActiveLink(value);
      setExpanded(false);
    }, []);

    return (
        <Navbar
            expand="md"
            className={`${scrolled ? "scrolled" : ""} shadow-effect`}
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
        >
            <Container className="navbar-container">
                <Navbar.Brand as={Link} to={`/#home`} onClick={() => onUpdateActiveLink("home")}>
                    <div className="navbar-logo d-flex">
                        <FontAwesomeIcon
                            className="navbar-logo-border"
                            icon={faSquare}
                        />
                        <FontAwesomeIcon
                            className="navbar-logo-m-left"
                            icon={faM}
                        />
                        <FontAwesomeIcon
                            className="navbar-logo-m-right"
                            icon={faM}
                        />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            to={`/#home`}
                            className={
                                activeLink === "home"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("home")}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to={`/#about`}
                            className={
                                activeLink === "about"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("about")}
                        >
                            Experience
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to={`/projects`}
                            className={
                                activeLink === "projects"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("projects")}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            href="/assets/Melvin_CV.pdf"
                            download
                            className="navbar-link"
                            >
                            Resume
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href={SocialLinks.LINKEDIN}>
                                <FontAwesomeIcon
                                    className="social-svg"
                                    icon={faLinkedinIn}
                                />
                            </a>
                            <a href={SocialLinks.GITHUB}>
                                <FontAwesomeIcon
                                    className="social-svg"
                                    icon={faGithub}
                                />
                            </a>
                            <a
                                href={SocialLinks.MAIL}
                                aria-label="Send me an email"
                            >
                                <FontAwesomeIcon
                                    className="social-svg"
                                    icon={faEnvelope}
                                />
                            </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
