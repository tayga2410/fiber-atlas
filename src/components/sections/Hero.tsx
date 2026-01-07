"use client";

import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const Hero = () => {
    const t = useTranslations('Hero');

    return (
        <section className={styles.heroSection}>
            <div className={styles.backgroundOverlay}></div>
            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.textContent}
                >
                    <div className={styles.badge}>
                        {t('badge')}
                    </div>
                    <h1 className={styles.title}>
                        {t('title')}
                    </h1>

                    <p className={styles.subtitle}>
                        {t('subtitle')}
                    </p>

                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <CheckCircle2 size={20} className={styles.checkIcon} />
                            <span>{t('features.passportization')}</span>
                        </div>
                        <div className={styles.featureItem}>
                            <CheckCircle2 size={20} className={styles.checkIcon} />
                            <span>{t('features.schemes')}</span>
                        </div>
                    </div>

                    <div className={styles.ctaGroup}>
                        <Button size="lg" onClick={() => window.location.href = '#contact'} className={styles.primaryBtn}>
                            {t('cta')} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Button>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};
