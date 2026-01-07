"use client";

import React from 'react';
import styles from './Comparison.module.css';
import { Section } from '../ui/Section';
import { Check, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Comparison = () => {
    const t = useTranslations('Comparison');

    const rows = [
        {
            feature: t('rows.positioning.feature'),
            atlas: t('rows.positioning.atlas'),
            manual: t('rows.positioning.manual'),
            status: "atlas"
        },
        {
            feature: t('rows.schemes.feature'),
            atlas: t('rows.schemes.atlas'),
            manual: t('rows.schemes.manual'),
            status: "atlas"
        },
        {
            feature: t('rows.fiber.feature'),
            atlas: t('rows.fiber.atlas'),
            manual: t('rows.fiber.manual'),
            status: "atlas"
        },
        {
            feature: t('rows.search.feature'),
            atlas: t('rows.search.atlas'),
            manual: t('rows.search.manual'),
            status: "atlas"
        },
        {
            feature: t('rows.reliability.feature'),
            atlas: t('rows.reliability.atlas'),
            manual: t('rows.reliability.manual'),
            status: "atlas"
        }
    ];

    return (
        <Section id="comparison" className={styles.comparisonSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>{t('title')}</h2>
                <p className={styles.subtitle}>
                    {t('subtitle')}
                </p>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.thFeature}>{t('headers.feature')}</th>
                            <th className={`${styles.th} ${styles.thPrimary}`}>{t('headers.atlas')}</th>
                            <th className={styles.th}>{t('headers.manual')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td className={styles.tdFeature}>{row.feature}</td>
                                <td className={`${styles.td} ${styles.tdPrimary}`}>
                                    <div className={styles.cellContent}>
                                        <Check className={styles.checkIcon} size={20} />
                                        <span>{row.atlas}</span>
                                    </div>
                                </td>
                                <td className={styles.td}>
                                    <div className={styles.cellContent}>
                                        <X className={styles.xIcon} size={20} />
                                        <span className={styles.na}>{row.manual}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={styles.mobileCards}>
                {rows.map((row, index) => (
                    <div key={index} className={styles.mobileCard}>
                        <h4 className={styles.mobileCardTitle}>{row.feature}</h4>
                        <div className={styles.mobileComparison}>
                            <div className={styles.mobileAtlas}>
                                <Check size={16} className={styles.checkIcon} />
                                <span>{row.atlas}</span>
                            </div>
                            <div className={styles.mobileManual}>
                                <X size={16} className={styles.xIcon} />
                                <span>{row.manual}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
