import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Experience', id: 'experience' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.logo} onClick={() => scrollToSection('home')}>
                        <img src={require('../images/logo.png')} alt="AK Tech Astra" className={styles.logoImage} style={{ height: '40px', width: 'auto' }} />
                        <span className={styles.logoText}>AK Tech Astra<span className={styles.dot}>.</span></span>
                    </div>

                    {/* Desktop Nav */}
                    <ul className={styles.desktopLinks}>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <button
                                    onClick={() => scrollToSection(link.id)}
                                    className={`${styles.link} ${activeSection === link.id ? styles.active : ''}`}
                                >
                                    <span className={styles.linkNumber}>0{navLinks.indexOf(link) + 1}.</span>
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.mobileBtn}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileLinks}>
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`${styles.mobileLink} ${activeSection === link.id ? styles.active : ''}`}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
