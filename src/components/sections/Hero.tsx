"use client";

import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
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
                        Система учета ВОЛС №1
                    </div>
                    <h1 className={styles.title}>
                        Полный контроль над <br />
                        <span className={styles.highlight}>инфраструктурой сети</span>
                    </h1>

                    <p className={styles.subtitle}>
                        Профессиональная GIS-система для операторов связи.
                        Паспортизация, мониторинг и управление сетью в одном окне.
                    </p>

                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <CheckCircle2 size={20} className={styles.checkIcon} />
                            <span>Точная паспортизация</span>
                        </div>
                        <div className={styles.featureItem}>
                            <CheckCircle2 size={20} className={styles.checkIcon} />
                            <span>Интерактивные схемы</span>
                        </div>

                    </div>

                    <div className={styles.ctaGroup}>
                        <Button size="lg" onClick={() => window.location.href = '#contact'} className={styles.primaryBtn}>
                            Начать внедрение <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Button>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};
