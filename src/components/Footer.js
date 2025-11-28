import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.left}>
                        <p className={styles.copyright}>
                            © {new Date().getFullYear()} AK Tech Astra. All rights reserved.
                        </p>
                    </div>

                    <div className={styles.center}>
                        <p className={styles.madeWith}>
                            Made with <Heart size={14} className={styles.heart} /> using React
                        </p>
                    </div>

                    <div className={styles.right}>
                        <a href="https://github.com/Kashif-Rehman" target="_blank" rel="noopener noreferrer" className={styles.social}>
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/kashif-rehman-65354520b" target="_blank" rel="noopener noreferrer" className={styles.social}>
                            <Linkedin size={18} />
                        </a>
                        <a href="mailto:iaamkashif@gmail.com" className={styles.social}>
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
