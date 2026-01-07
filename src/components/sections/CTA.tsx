"use client";

import React from 'react';
import styles from './CTA.module.css';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export const CTA = () => {
    return (
        <Section id="cta" className={styles.ctaSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Готовы навести порядок в своей сети?</h2>
                    <p className={styles.subtitle}>
                        Присоединяйтесь к десяткам провайдеров, которые уже выбрали Fiber Atlas для управления своей инфраструктурой.
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
                            Написать в WhatsApp
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
                            Telegram
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};
