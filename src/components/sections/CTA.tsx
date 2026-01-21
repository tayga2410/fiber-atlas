"use client";

import React from 'react';
import styles from './CTA.module.css';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const CTA = () => {
    const t = useTranslations('CTA');

    return (
        <Section id="cta" className={styles.ctaSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.subtitle}>
                        {t('subtitle')}
                    </p>

                    <div className={styles.features}>
                    </div>

                    <div className={styles.actions}>
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
                            href="https://t.me/tayga_dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.telegramBtn}
                        >
                            <Send size={20} />
                            {t('telegram')}
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};
