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
                            <a href="#projects" className={styles.primaryBtn}>
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a href="/resume.html" target="_blank" className={styles.secondaryBtn}>
                                View Resume <Download size={18} />
                            </a>
                        </div>

                        <div className={styles.socials}>
                            <a href="https://github.com/Kashif-Rehman" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/kashif-rehman-65354520b" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:iaamkashif@gmail.com" className={styles.socialLink}>
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <div className={styles.imageContainer}>
                            <img src={require('../images/dp.jpg')} alt="Kashif Rehman" className={styles.profileImage} />
                            <div className={styles.imageGlow} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
