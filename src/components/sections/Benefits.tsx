"use client";

import React from 'react';
import styles from './Benefits.module.css';
import { Section } from '../ui/Section';
import { Clock, TrendingUp, Coins, Rocket, Lock, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Benefits = () => {
    const t = useTranslations('Benefits');

    const benefits = [
        {
            icon: <Clock size={32} />,
            value: t('items.time.value'),
            label: t('items.time.label'),
            desc: t('items.time.desc')
        },
        {
            icon: <Coins size={32} />,
            value: t('items.cost.value'),
            label: t('items.cost.label'),
            desc: t('items.cost.desc')
        },
        {
            icon: <TrendingUp size={32} />,
            value: t('items.onboarding.value'),
            label: t('items.onboarding.label'),
            desc: t('items.onboarding.desc')
        },
        {
            icon: <Rocket size={32} />,
            value: t('items.start.value'),
            label: t('items.start.label'),
            desc: t('items.start.desc')
        },
        {
            icon: <Lock size={32} />,
            value: t('items.control.value'),
            label: t('items.control.label'),
            desc: t('items.control.desc')
        },
        {
            icon: <Globe size={32} />,
            value: t('items.objects.value'),
            label: t('items.objects.label'),
            desc: t('items.objects.desc')
        }
    ];

    return (
        <Section id="benefits">
            <div className={styles.header}>
                <h2 className={styles.title}>{t('title')}</h2>
                <p className={styles.subtitle}>
                    {t('subtitle')}
                </p>
            </div>

            <div className={styles.grid}>
                {benefits.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            {item.icon}
                        </div>
                        <div className={styles.value}>{item.value}</div>
                        <div className={styles.label}>{item.label}</div>
                        <p className={styles.desc}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};
