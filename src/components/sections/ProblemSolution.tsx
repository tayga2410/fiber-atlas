"use client";

import React from 'react';
import styles from './ProblemSolution.module.css';
import { Section } from '../ui/Section';
import { XCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const ProblemSolution = () => {
    const t = useTranslations('ProblemSolution');

    return (
        <Section id="problem-solution" alt>
            <div className={styles.header}>
                <h2 className={styles.title}>{t('title')}</h2>
                <p className={styles.subtitle}>
                    {t('subtitle')}
                </p>
            </div>

            <div className={styles.grid}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={styles.card}
                >
                    <div className={styles.cardHeader}>
                        <h3 className={styles.cardTitle}>{t('problemTitle')}</h3>
                    </div>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <XCircle className={styles.iconProblem} size={20} />
                            <span>{t('problems.0')}</span>
                        </li>
                        <li className={styles.listItem}>
                            <XCircle className={styles.iconProblem} size={20} />
                            <span>{t('problems.1')}</span>
                        </li>
                        <li className={styles.listItem}>
                            <XCircle className={styles.iconProblem} size={20} />
                            <span>{t('problems.2')}</span>
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`${styles.card} ${styles.cardSolution}`}
                >
                    <div className={styles.cardHeader}>
                        <h3 className={`${styles.cardTitle} ${styles.textPrimary}`}>
                            {t('solutionTitle')}
                        </h3>
                    </div>

                    <div className={styles.solutionImageWrapper}>
                        <img
                            src="/images/features-collage.png"
                            alt="Fiber Atlas Features Collage"
                            className={styles.solutionImage}
                        />
                    </div>

                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <CheckCircle className={styles.iconSolution} size={20} />
                            <span>{t('solutions.0')}</span>
                        </li>
                        <li className={styles.listItem}>
                            <CheckCircle className={styles.iconSolution} size={20} />
                            <span>{t('solutions.1')}</span>
                        </li>
                        <li className={styles.listItem}>
                            <CheckCircle className={styles.iconSolution} size={20} />
                            <span>{t('solutions.2')}</span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
};
