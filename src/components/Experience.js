import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import Section from './Section';
import styles from './Experience.module.css';

const Experience = () => {
    const timeline = [
        {
            title: 'eBay Marketplace Specialist',
            company: 'Self-Employed',
            period: '4 Years',
            description: 'Managed comprehensive e-commerce operations including product listings, inventory management, and customer service. Achieved 100% customer satisfaction.',
            icon: <Briefcase size={20} />,
            type: 'work'
        },
        {
            title: 'Digital Marketing Intern',
            company: 'Moboroid',
            period: 'Internship',
            description: 'Gained hands-on experience in digital marketing strategies, social media management, and campaign optimization.',
            icon: <Briefcase size={20} />,
            type: 'work'
        },
        {
            title: 'Bachelor of Software Engineering',
            company: 'MUST University',
            period: '2020 - 2024',
            description: 'CGPA: 3.2/4.0. Focused on Software Development, IoT, and System Architecture.',
            icon: <GraduationCap size={20} />,
            type: 'education'
        },
        {
            title: '3rd Position - National Level',
            company: 'PEC Final Year Project Competition',
            period: '2024',
            description: 'Awarded for Smart Helmet for Coal Miner Safety & Alert System project.',
            icon: <Award size={20} />,
            type: 'award'
        }
    ];

    return (
        <Section id="experience" className={styles.experience}>
            <div className="container">
                <h2 className={styles.title}>Experience & Education</h2>
                <div className={styles.timeline}>
                    {timeline.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.marker}>
                                <div className={`${styles.icon} ${styles[item.type]}`}>
                                    {item.icon}
                                </div>
                                <div className={styles.line} />
                            </div>
                            <div className={styles.content}>
                                <span className={styles.period}>{item.period}</span>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <h4 className={styles.company}>{item.company}</h4>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
