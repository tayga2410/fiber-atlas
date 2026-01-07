"use client";

import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { Section } from '../ui/Section';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const t = useTranslations('FAQ');

    const faqs = [
        {
            question: t('q1.question'),
            answer: t('q1.answer')
        },
        {
            question: t('q2.question'),
            answer: t('q2.answer')
        },
        {
            question: t('q3.question'),
            answer: t('q3.answer')
        },
        {
            question: t('q4.question'),
            answer: t('q4.answer')
        },
        {
            question: t('q5.question'),
            answer: t('q5.answer')
        },
        {
            question: t('q6.question'),
            answer: t('q6.answer')
        }
    ];

    return (
        <Section id="faq" className={styles.faqSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>{t('title')}</h2>
                <p className={styles.subtitle}>
                    {t('subtitle')}
                </p>
            </div>

            <div className={styles.container}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <button
                            className={styles.questionBtn}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span>{faq.question}</span>
                            {openIndex === index ? <ChevronUp size={20} className={styles.icon} /> : <ChevronDown size={20} className={styles.icon} />}
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={styles.answerWrapper}
                                >
                                    <div className={styles.answer}>
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </Section>
    );
};
