import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import './Contact.css';
import { profile } from '../../content/data';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { Mail, Send, ArrowUp } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
};

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={0}
            variants={fadeUp}
          >
            <span className="section-eyebrow">CONTACT //</span>
            <h2>Get in touch</h2>
          </motion.div>

          <div className="contact__grid">
            <motion.div
              className="contact__left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={1}
              variants={fadeUp}
            >
              <p className="contact__desc">
                Whether you have a project idea, a research collaboration, or just want to connect — my inbox is open.
              </p>
              <div className="contact__links">
                <a href={`mailto:${profile.email}`} className="contact__link-card">
                  <Mail size={18} strokeWidth={1.5} />
                  <div>
                    <p className="contact__link-label mono-label">EMAIL</p>
                    <p className="contact__link-value">{profile.email}</p>
                  </div>
                </a>
                <a href={profile.links.github} target="_blank" rel="noreferrer" className="contact__link-card">
                  <GithubIcon size={18} />
                  <div>
                    <p className="contact__link-label mono-label">GITHUB</p>
                    <p className="contact__link-value">VanshikaLud04</p>
                  </div>
                </a>
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="contact__link-card">
                  <LinkedinIcon size={18} />
                  <div>
                    <p className="contact__link-label mono-label">LINKEDIN</p>
                    <p className="contact__link-value">vanshika-ludhani</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="contact__right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={2}
              variants={fadeUp}
            >
              {submitted ? (
                <div className="contact__success">
                  <Send size={32} strokeWidth={1.2} />
                  <p>Opening your email client with the message pre-filled. Thanks!</p>
                </div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="contact__field">
                    <label className="mono-label" htmlFor="contact-name">NAME</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div className="contact__field">
                    <label className="mono-label" htmlFor="contact-email">EMAIL</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                  <div className="contact__field">
                    <label className="mono-label" htmlFor="contact-message">MESSAGE</label>
                    <textarea
                      id="contact-message"
                      required
                      placeholder="What would you like to say?"
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    />
                  </div>
                  <button type="submit" className="btn-accent contact__submit">
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__inner">
          <p className="footer__copy mono-label">
            © 2026 Vanshika Ludhani — Built with React + Framer Motion
          </p>
          <a href="#hero" className="footer__top-btn">
            <ArrowUp size={14} />
            <span className="mono-label">Back to top</span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Contact;
