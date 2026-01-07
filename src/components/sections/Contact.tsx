"use client";

import React from 'react';
import styles from './Contact.module.css';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Phone, MessageCircle, Send, Mail } from 'lucide-react';
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
                <div className={styles.infoColumn}>
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.subtitle}>
                        {t('subtitle')}
                    </p>

                    <div className={styles.contacts}>
                        <div className={styles.contactItem}>
                            <Phone className={styles.icon} size={24} />
                            <div>
                                <div className={styles.contactLabel}>{t('info.phone')}</div>
                                <a href="https://wa.me/77007774445" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>{t('Header.phone')}</a>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <MessageCircle className={styles.icon} size={24} />
                            <div>
                                <div className={styles.contactLabel}>{t('info.whatsapp')}</div>
                                <a href="https://wa.me/77007774445" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>{t('info.writeWhatsapp')}</a>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <Send className={styles.icon} size={24} />
                            <div>
                                <div className={styles.contactLabel}>{t('info.telegram')}</div>
                                <a href="https://t.me/fiberatlas" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>{t('info.writeTelegram')}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.formColumn}>
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
                </div>
            </div>
        </Section>
    );
};
