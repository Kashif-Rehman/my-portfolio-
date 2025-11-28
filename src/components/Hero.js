import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.blob} />
                <div className={styles.grid} />
            </div>

            <div className="container">
                <div className={styles.contentWrapper}>
                    <div className={styles.content}>
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span>
                            Available for hire
                        </div>

                        <h1 className={styles.title}>
                            Hi, I'm <span className="gradient-text">Kashif Rehman</span>
                        </h1>

                        <h2 className={styles.subtitle}>
                            Software Engineer & <br />
                            <span className={styles.typing}>IoT Specialist</span>
                        </h2>

                        <p className={styles.description}>
                            I build accessible, pixel-perfect, secure, and performant web applications.
                            Award-winning developer with expertise in React JS, IoT, and E-commerce.
                        </p>

                        <div className={styles.actions}>
                            <a href="#projects" className={styles.primaryBtn} aria-label="View my project portfolio">
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a href="/resume.html" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn} aria-label="Open my resume in a new tab">
                                View Resume <Download size={18} />
                            </a>
                            <a href="#contact" className={styles.hireBtn} aria-label="Hire me - jump to contact form">
                                Hire Me
                            </a>
                        </div>

                        <div className={styles.socials}>
                            <a href="https://github.com/Kashif-Rehman" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub profile">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/kashif-rehman-65354520b" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn profile">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:iaamkashif@gmail.com" className={styles.socialLink} aria-label="Send me an email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <div className={styles.imageContainer}>
                            <img src={require('../images/dp.jpg')} alt="Portrait of Kashif Rehman" className={styles.profileImage} loading="lazy" />
                            <div className={styles.imageGlow} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
