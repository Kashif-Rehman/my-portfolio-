import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react';
import Section from './Section';
import styles from './Contact.module.css';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        emailjs.sendForm(
            "service_f9txzxc",
            "template_rq3kr0e",
            form.current,
            "GNUvWh152oJDTVGjj"
        )
            .then((result) => {
                setLoading(false);
                setStatus({ type: 'success', message: "Message sent successfully! I'll get back to you soon." });
                e.target.reset();
            }, (error) => {
                setLoading(false);
                setStatus({ type: 'error', message: "Failed to send message. Please try again." });
                console.error(error);
            });
    };

    return (
        <Section id="contact" className={styles.contact}>
            <div className="container">
                <h2 className={styles.title}>Get In Touch</h2>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <p className={styles.subtitle}>
                            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                        </p>

                        <div className={styles.infoItems}>
                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><Mail size={20} /></div>
                                <div>
                                    <span className={styles.label}>Email</span>
                                    <a href="mailto:iaamkashif@gmail.com" className={styles.value}>iaamkashif@gmail.com</a>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><Phone size={20} /></div>
                                <div>
                                    <span className={styles.label}>Phone</span>
                                    <a href="tel:+923167602233" className={styles.value}>+92 316-7602233</a>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><MapPin size={20} /></div>
                                <div>
                                    <span className={styles.label}>Location</span>
                                    <span className={styles.value}>Bhimber, AJK</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label>Name</label>
                            <input type="text" name="name" required placeholder="John Doe" />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Email</label>
                            <input type="email" name="email" required placeholder="john@example.com" />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Message</label>
                            <textarea name="message" required rows="5" placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn} disabled={loading}>
                            {loading ? <Loader className={styles.spin} size={20} /> : <Send size={20} />}
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>

                        {status.message && (
                            <div className={`${styles.status} ${styles[status.type]}`}>
                                {status.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
