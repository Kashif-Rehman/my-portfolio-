import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        const saved = localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') {
            setTheme(saved);
            document.documentElement.setAttribute('data-theme', saved);
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    };

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
                    <button
                        type="button"
                        className={styles.logo}
                        onClick={() => scrollToSection('home')}
                        aria-label="Go to Home section"
                    >
                        <img src={require('../images/logo.png')} alt="AK Tech Astra logo" className={styles.logoImage} style={{ height: '40px', width: 'auto' }} loading="lazy" />
                        <span className={styles.logoText}>AK Tech Astra<span className={styles.dot}>.</span></span>
                    </button>

                    {/* Desktop Nav */}
                    <ul className={styles.desktopLinks}>
                        {navLinks.map((link, i) => (
                            <li key={link.id}>
                                <button
                                    onClick={() => scrollToSection(link.id)}
                                    className={`${styles.link} ${activeSection === link.id ? styles.active : ''}`}
                                    aria-label={`Go to ${link.name} section`}
                                    aria-current={activeSection === link.id ? 'true' : undefined}
                                >
                                    <span className={styles.linkNumber}>0{i + 1}.</span>
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        className={styles.themeToggle}
                        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
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
