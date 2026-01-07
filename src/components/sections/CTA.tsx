"use client";

import React from 'react';
import styles from './CTA.module.css';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const CTA = () => {
    const t = useTranslations('CTA');

    return (
        <Section id="cta" className={styles.ctaSection}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.subtitle}>
                        {t('subtitle')}
                    </p>

                    <div className={styles.features}>
                    </div>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Button
                            size="lg"
                            href="https://wa.me/77007774445"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsappBtn}
                        >
                            <MessageCircle size={20} />
                            {t('whatsapp')}
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            href="https://t.me/fiberatlas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.telegramBtn}
                        >
                            <Send size={20} />
                            {t('telegram')}
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
};
