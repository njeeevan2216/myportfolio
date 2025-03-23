import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`text-white py-4 fixed w-full transition-colors duration-300 ${scrolled ? "bg-gray-950" : "bg-transparent"}`} style={{ zIndex: 100 }}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-lg font-bold">MyPortfolio</div>
        <div className="flex space-x-4">
          <Link href="/#" className="hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link href="https://linkedin.com/in/nj2216" target="_blank" className="hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </Link>
          <Link href="https://github.com/njeeevan2216" target="_blank" className="hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faGithub} /> Github
          </Link>
          <Link href="mailto:njeevan2216@gmail.com" target="_blank" className="hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faEnvelope} /> Mail
          </Link>
          <Link href="https://drive.google.com/file/d/19HfU_rwsJ7O5xBhpKJmY0g5Zbzw6Tsor/view?usp=sharing" target="_blank" className="hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faFileAlt} /> Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
