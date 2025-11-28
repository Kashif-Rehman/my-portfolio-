import React from 'react';
import { Quote } from 'lucide-react';
import Section from './Section';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const testimonials = [
        {
            text: 'Exceptional service and professionalism. Kashif handles orders with great care and attention to detail.',
            author: 'Client Review',
            role: 'eBay Customer',
            rating: 5
        },
        {
            text: 'Outstanding work on the Smart Helmet project. Shows great innovation and technical expertise.',
            author: 'Project Supervisor',
            role: 'MUST University',
            rating: 5
        }
    ];

    return (
        <Section className={styles.testimonials}>
            <div className="container">
                <h2 className={styles.title}>What People Say</h2>
                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <Quote className={styles.quoteIcon} size={32} />
                            <p className={styles.text}>"{item.text}"</p>
                            <div className={styles.footer}>
                                <div className={styles.info}>
                                    <h4 className={styles.author}>{item.author}</h4>
                                    <span className={styles.role}>{item.role}</span>
                                </div>
                                <div className={styles.stars}>
                                    {[...Array(item.rating)].map((_, i) => (
                                        <span key={i}>⭐</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Testimonials;
