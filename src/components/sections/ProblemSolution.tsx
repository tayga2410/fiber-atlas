"use client";

import React from 'react';
import styles from './ProblemSolution.module.css';
import { Section } from '../ui/Section';
import { XCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProblemSolution = () => {
    const problems = [
        "Кабели и муфты в Excel-таблицах",
        "Схемы подключений в AutoCAD или на бумаге",
        "Разрозненные базы для оборудования и клиентов"
    ];

    const solutions = [
        "Интерактивная карта — вся сеть как на ладони",
        "Встроенный редактор схем прямо в браузере",
        "Единая база: кабели, оборудование, клиенты"
    ];

    return (
        <Section id="problem-solution" alt>
            <div className={styles.header}>
                <h2 className={styles.title}>Знакомые проблемы?</h2>
                <p className={styles.subtitle}>
                    Устаревшие методы учета тормозят развитие сети и увеличивают время реакции на аварии.
                </p>
            </div>

            <div className={styles.grid}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={styles.card}
                >
                    <div className={styles.cardHeader}>
                        <h3 className={styles.cardTitle}>Как это обычно бывает</h3>
                    </div>
                    <ul className={styles.list}>
                        {problems.map((item, index) => (
                            <li key={index} className={styles.listItem}>
                                <XCircle className={styles.iconProblem} size={20} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`${styles.card} ${styles.cardSolution}`}
                >
                    <div className={styles.cardHeader}>
                        <h3 className={`${styles.cardTitle} ${styles.textPrimary}`}>
                            Решение Fiber Atlas
                        </h3>
                    </div>

                    <div className={styles.solutionImageWrapper}>
                        <img
                            src="/images/features-collage.png"
                            alt="Fiber Atlas Features Collage"
                            className={styles.solutionImage}
                        />
                    </div>

                    <ul className={styles.list}>
                        {solutions.map((item, index) => (
                            <li key={index} className={styles.listItem}>
                                <CheckCircle className={styles.iconSolution} size={20} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
};
