"use client";

import React from 'react';
import styles from './Contact.module.css';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Phone, MessageCircle, Send, Mail } from 'lucide-react';

export const Contact = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const company = formData.get('company') as string;
        const phone = formData.get('phone') as string;
        const message = formData.get('message') as string;

        const text = `Новая заявка с сайта:\nИмя: ${name}\nКомпания: ${company}\nТелефон: ${phone}\nКомментарий: ${message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/77007774445?text=${encodedText}`, '_blank');
    };

    return (
        <Section id="contact">
            <div className={styles.container}>
                <div className={styles.infoColumn}>
                    <h2 className={styles.title}>Свяжитесь с нами</h2>
                    <p className={styles.subtitle}>
                        Оставьте заявку, и мы свяжемся с вами для обсуждения деталей.
                    </p>

                    <div className={styles.contacts}>
                        <div className={styles.contactItem}>
                            <Phone className={styles.icon} size={24} />
                            <div>
                                <div className={styles.contactLabel}>Телефон</div>
                                <a href="https://wa.me/77007774445" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>8 700 777 44 45</a>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <MessageCircle className={styles.icon} size={24} />
                            <div>
                                <div className={styles.contactLabel}>WhatsApp</div>
                                <a href="https://wa.me/77007774445" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>Написать в WhatsApp</a>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <Send className={styles.icon} size={24} />
                            <div>
                                <div className={styles.contactLabel}>Telegram</div>
                                <a href="https://t.me/fiberatlas" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>Написать в Telegram</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.formColumn}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <h3 className={styles.formTitle}>Оставить заявку</h3>

                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Ваше имя</label>
                            <input type="text" id="name" name="name" className={styles.input} placeholder="Иван Иванов" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="company" className={styles.label}>Компания</label>
                            <input type="text" id="company" name="company" className={styles.input} placeholder="ООО Телеком" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>Телефон</label>
                            <input type="tel" id="phone" name="phone" className={styles.input} placeholder="+7 (999) 000-00-00" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Комментарий</label>
                            <textarea id="message" name="message" className={styles.textarea} placeholder="Интересует внедрение..." rows={4}></textarea>
                        </div>

                        <Button size="lg" className={styles.submitBtn} type="submit">
                            Отправить заявку
                        </Button>

                        <p className={styles.disclaimer}>
                            Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
                        </p>
                    </form>
                </div>
            </div>
        </Section>
    );
};
