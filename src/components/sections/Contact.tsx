"use client";

import React from 'react';
import styles from './Contact.module.css';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Phone, MessageCircle, Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const Contact = () => {
    const t = useTranslations('Contact');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const company = formData.get('company') as string;
        const phone = formData.get('phone') as string;
        const message = formData.get('message') as string;

        const text = `${t('form.newRequest')}:\n${t('form.name')}: ${name}\n${t('form.company')}: ${company}\n${t('form.phone')}: ${phone}\n${t('form.comment')}: ${message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/77007774445?text=${encodedText}`, '_blank');
    };

    return (
        <Section id="contact">
            <div className={styles.container}>
                <motion.div
                    className={styles.infoColumn}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.subtitle}>
                        {t('subtitle')}
                    </p>

                    <div className={styles.contacts}>
                        <motion.div
                            className={styles.contactItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <Phone className={styles.icon} size={24} />
                            <div>
                                <div className={styles.contactLabel}>{t('info.phone')}</div>
                                <a href="https://wa.me/77007774445" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>{t('Header.phone')}</a>
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.contactItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            <MessageCircle className={styles.icon} size={24} />
                            <div>
                                <div className={styles.contactLabel}>{t('info.whatsapp')}</div>
                                <a href="https://wa.me/77007774445" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>{t('info.writeWhatsapp')}</a>
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.contactItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <Send className={styles.icon} size={24} />
                            <div>
                                <div className={styles.contactLabel}>{t('info.telegram')}</div>
                                <a href="https://t.me/tayga_dev" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>{t('info.writeTelegram')}</a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.formColumn}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <h3 className={styles.formTitle}>{t('formTitle')}</h3>

                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>{t('form.name')}</label>
                            <input type="text" id="name" name="name" className={styles.input} placeholder={t('form.namePlaceholder')} required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="company" className={styles.label}>{t('form.company')}</label>
                            <input type="text" id="company" name="company" className={styles.input} placeholder={t('form.companyPlaceholder')} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>{t('form.phone')}</label>
                            <input type="tel" id="phone" name="phone" className={styles.input} placeholder={t('form.phonePlaceholder')} required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>{t('form.comment')}</label>
                            <textarea id="message" name="message" className={styles.textarea} placeholder={t('form.commentPlaceholder')} rows={4}></textarea>
                        </div>

                        <Button size="lg" className={styles.submitBtn} type="submit">
                            {t('form.submit')}
                        </Button>

                        <p className={styles.disclaimer}>
                            {t('form.disclaimer')}
                        </p>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
};
