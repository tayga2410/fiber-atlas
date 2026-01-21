"use client";

import React from 'react';
import styles from './Showcase.module.css';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const Showcase = () => {
    const t = useTranslations('Showcase');

    const items = [
        {
            image: '/images/any_distance.png',
            titleKey: 'distanceTitle',
            descriptionKey: 'distanceDesc'
        },
        {
            image: '/images/entities and cables.png',
            titleKey: 'entitiesTitle',
            descriptionKey: 'entitiesDesc'
        },
        {
            image: '/images/scheme.png',
            titleKey: 'schemeTitle',
            descriptionKey: 'schemeDesc'
        },
        {
            image: '/images/cluster.jpeg',
            titleKey: 'clusterTitle',
            descriptionKey: 'clusterDesc'
        },
        {
            image: '/images/many-objects.jpeg',
            titleKey: 'manyObjectsTitle',
            descriptionKey: 'manyObjectsDesc'
        }
    ];

    return (
        <Section id="showcase" className={styles.showcaseSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>{t('title')}</h2>
                <p className={styles.subtitle}>
                    {t('subtitle')}
                </p>
            </div>

            <div className={styles.showcaseGrid}>
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`${styles.showcaseItem} ${index % 2 !== 0 ? styles.reversed : ''}`}
                    >
                        <div className={styles.imageWrapper}>
                            <img
                                src={item.image}
                                alt={t(`items.${item.titleKey}`)}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.textContent}>
                            <h3 className={styles.itemTitle}>{t(`items.${item.titleKey}`)}</h3>
                            <p className={styles.itemDescription}>{t(`items.${item.descriptionKey}`)}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
