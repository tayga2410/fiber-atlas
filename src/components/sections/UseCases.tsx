"use client";

import React, { useState } from 'react';
import styles from './UseCases.module.css';
import { Section } from '../ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Users, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const UseCases = () => {
    const [activeTab, setActiveTab] = useState(0);
    const t = useTranslations('UseCases');

    const cases = [
        {
            id: 0,
            tabTitle: t('cases.isp.tabTitle'),
            icon: <Globe size={20} />,
            title: t('cases.isp.title'),
            problem: t('cases.isp.problem'),
            solution: [
                t('cases.isp.solution.0'),
                t('cases.isp.solution.1'),
                t('cases.isp.solution.2')
            ],
            result: [
                t('cases.isp.result.0'),
                t('cases.isp.result.1')
            ]
        },
        {
            id: 1,
            tabTitle: t('cases.city.tabTitle'),
            icon: <Users size={20} />,
            title: t('cases.city.title'),
            problem: t('cases.city.problem'),
            solution: [
                t('cases.city.solution.0'),
                t('cases.city.solution.1'),
                t('cases.city.solution.2')
            ],
            result: [
                t('cases.city.result.0'),
                t('cases.city.result.1')
            ]
        },
        {
            id: 2,
            tabTitle: t('cases.operator.tabTitle'),
            icon: <Globe size={20} />,
            title: t('cases.operator.title'),
            problem: t('cases.operator.problem'),
            solution: [
                t('cases.operator.solution.0'),
                t('cases.operator.solution.1'),
                t('cases.operator.solution.2')
            ],
            result: [
                t('cases.operator.result.0'),
                t('cases.operator.result.1')
            ]
        }
    ];

    return (
        <Section id="cases" className={styles.useCasesSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>{t('title')}</h2>
                <p className={styles.subtitle}>
                    {t('subtitle')}
                </p>
            </div>

            <div className={styles.tabs}>
                {cases.map((item) => (
                    <button
                        key={item.id}
                        className={`${styles.tab} ${activeTab === item.id ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab(item.id)}
                    >
                        <span className={styles.tabIcon}>{item.icon}</span>
                        {item.tabTitle}
                    </button>
                ))}
            </div>

            <div className={styles.contentWrapper}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className={styles.caseContent}
                    >
                        <div className={styles.caseHeader}>
                            <h3 className={styles.caseTitle}>{cases[activeTab].title}</h3>
                        </div>

                        <div className={styles.caseGrid}>
                            <div className={styles.problemSide}>
                                <div className={styles.blockTitle}>{t('before')}</div>
                                <p className={styles.problemText}>{cases[activeTab].problem}</p>
                                <div className={styles.blockTitle}>{t('solution')}</div>
                                <ul className={styles.list}>
                                    {cases[activeTab].solution.map((item, i) => (
                                        <li key={i}>
                                            <CheckCircle2 size={18} className={styles.checkIcon} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.resultBlock}>
                                <div className={styles.blockTitle}>{t('result')}</div>
                                <ul className={styles.resultList}>
                                    {cases[activeTab].result.map((item, i) => (
                                        <li key={i} className={styles.resultItem}>
                                            <span className={styles.bullet}></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </Section>
    );
};
