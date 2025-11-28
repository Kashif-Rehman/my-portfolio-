import React from 'react';
import { Code, Database, Layout, Smartphone, Server, Globe } from 'lucide-react';
import Section from './Section';
import styles from './About.module.css';

const About = () => {
    const skills = [
        { name: 'React JS', icon: <Code size={24} />, level: 'Advanced' },
        { name: 'IoT Development', icon: <Smartphone size={24} />, level: 'Advanced' },
        { name: 'Firebase', icon: <Database size={24} />, level: 'Intermediate' },
        { name: 'Front-End', icon: <Layout size={24} />, level: 'Advanced' },
        { name: 'Node.js', icon: <Server size={24} />, level: 'Intermediate' },
        { name: 'E-commerce', icon: <Globe size={24} />, level: 'Expert' },
    ];

    return (
        <Section id="about" className={styles.about}>
            <div className="container">
                <h2 className={styles.title}>About Me</h2>
                <div className={styles.grid}>
                    <div className={styles.text}>
                        <p>
                            I am a passionate Software Engineer from Chowki, Bhimber, AJK, with a strong foundation in software development and IoT technologies.
                            My journey began at Read Foundation College and led me to earn my Bachelor degree in Software Engineering from MUST University.
                        </p>
                        <p>
                            My final year project, Smart Helmet Automation for Coal Miners, earned me 3rd position in the all-Pakistan PEC FYP Competition.
                            This IoT-based safety system protects coal miners through real-time gas detection and monitoring.
                        </p>
                        <p>
                            With 4 years of experience in eBay marketplace operations and expertise in React JS development, I bring a unique blend of technical skills and business acumen to every project.
                        </p>
                    </div>

                    <div className={styles.skills}>
                        <h3 className={styles.skillsTitle}>Tech Stack</h3>
                        <div className={styles.skillsGrid}>
                            {skills.map((skill, index) => (
                                <div key={index} className={styles.skillCard}>
                                    <div className={styles.skillIcon}>{skill.icon}</div>
                                    <span className={styles.skillName}>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
