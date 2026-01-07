"use client";

import React from 'react';
import styles from './DemoVideo.module.css';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Play } from 'lucide-react';

export const DemoVideo = () => {
    return (
        <Section id="demo" alt>
            <div className={styles.header}>
                <h2 className={styles.title}>Посмотрите Fiber Atlas в действии</h2>
                <p className={styles.subtitle}>
                    Узнайте, как легко управлять сетью с помощью нашей системы.
                </p>
            </div>

            <div className={styles.videoWrapper}>
                <div className={styles.videoPlaceholder}>
                    <img
                        src="/images/demo-thumbnail.png"
                        alt="Fiber Atlas Interface"
                        className={styles.thumbnail}
                    />
                    <div className={styles.playOverlay}>
                        <div className={styles.playButton}>
                            <Play size={32} fill="currentColor" />
                        </div>
                        <span className={styles.videoText}>Демонстрация системы (2:30)</span>
                    </div>
                </div>
            </div>

            <div className={styles.cta}>
                <p className={styles.ctaText}>Хотите увидеть вживую?</p>
                <Button size="lg" onClick={() => window.location.href = '#contact'}>
                    Заказать персональную демонстрацию
                </Button>
            </div>
        </Section>
    );
};
