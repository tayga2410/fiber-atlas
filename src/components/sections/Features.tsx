"use client";

import React from 'react';
import styles from './Features.module.css';
import { Section } from '../ui/Section';
import {
    Map as MapIcon,
    Layers,
    Zap,
    ShieldCheck,
    Database,
    Layout
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Features = () => {
    const t = useTranslations('Features');
    
    const features = [
        {
            icon: <MapIcon size={32} />,
            key: 'map',
            descriptionKey: 'map'
        },
        {
            icon: <Layers size={32} />,
            key: 'schemes',
            descriptionKey: 'schemes'
        },
        {
            icon: <Zap size={32} />,
            key: 'search',
            descriptionKey: 'search'
        },
        {
            icon: <Database size={32} />,
            key: 'docs',
            descriptionKey: 'docs'
        },
        {
            icon: <Layout size={32} />,
            key: 'reports',
            descriptionKey: 'reports'
        },
        {
            icon: <ShieldCheck size={32} />,
            key: 'anyDistance',
            descriptionKey: 'anyDistance'
        }
    ];

    return (
        <Section id="features" className={styles.featuresSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>{t('title')}</h2>
                <p className={styles.subtitle}>
                    {t('subtitle')}
                </p>
            </div>

            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            {feature.icon}
                        </div>
                        <h3 className={styles.cardTitle}>{t(`items.${feature.key}.title`)}</h3>
                        <p className={styles.cardDescription}>{t(`items.${feature.descriptionKey}.description`)}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};
