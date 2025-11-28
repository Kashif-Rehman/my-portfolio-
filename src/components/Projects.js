import React from 'react';
import { ExternalLink, Smartphone, Globe, Server } from 'lucide-react';
import Section from './Section';
import styles from './Projects.module.css';

const Projects = () => {
    const projects = [
        {
            title: 'Smart Helmet for Coal Miners',
            description: 'Award-winning IoT-based smart helmet for coal miner safety with gas detection, temperature monitoring, and emergency alerts.',
            tags: ['IoT', 'Arduino', 'C++'],
            icon: <Smartphone size={32} />,
            link: null,
            color: 'blue'
        },
        {
            title: 'Halal Food Scanner App',
            description: 'Mobile application helping users identify halal food products through intelligent scanning and database lookup.',
            tags: ['React JS', 'Mobile', 'API'],
            icon: <Globe size={32} />,
            link: 'https://eat-halal-food.web.app/',
            color: 'purple'
        },
        {
            title: 'Sata Al Faraj',
            description: 'A modern, responsive website for Sata Al Faraj, showcasing their services and portfolio with a premium design.',
            tags: ['React JS', 'Modern UI', 'Responsive'],
            icon: <Globe size={32} />,
            link: 'https://www.satahalfaraj.com',
            color: 'blue'
        },
        {
            title: 'Web Applications Suite',
            description: 'Responsive web applications built with React JS and Firebase for real-time data management and seamless user experience.',
            tags: ['React JS', 'Firebase', 'UI/UX'],
            icon: <Server size={32} />,
            link: null,
            color: 'cyan'
        }
    ];

    return (
        <Section id="projects" className={styles.projects}>
            <div className="container">
                <h2 className={styles.title}>Featured Projects</h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={`${styles.card} ${styles[project.color]}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    {project.icon}
                                </div>
                                <div className={styles.links}>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDesc}>{project.description}</p>

                            <div className={styles.tags}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Projects;
