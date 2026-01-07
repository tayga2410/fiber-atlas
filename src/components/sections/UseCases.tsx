"use client";

import React, { useState } from 'react';
import styles from './UseCases.module.css';
import { Section } from '../ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Globe, Users, CheckCircle2 } from 'lucide-react';

export const UseCases = () => {
    const [activeTab, setActiveTab] = useState(0);

    const cases = [
        {
            id: 0,
            tabTitle: 'Локальный провайдер',
            icon: <Globe size={20} />,
            title: 'Единая база данных сети',
            problem: 'Сеть на 2000 абонентов. Данные разбросаны по разным файлам, сложно быстро найти свободные волокна.',
            solution: [
                'Централизованный учет всех кабельных линий',
                'Оцифровка схем разварки всех муфт',
                'Создание интерактивной топологии сети'
            ],
            result: [
                'Вся информация о сети доступна в один клик',
                'Инвентаризация ресурсов стала прозрачной'
            ]
        },
        {
            id: 1,
            tabTitle: 'Городская сеть',
            icon: <Users size={20} />,
            title: 'Координация выездных бригад',
            problem: 'Сложная городская застройка, 50+ узлов агрегации. Монтажники тратят время на уточнение схем.',
            solution: [
                'Доступ к актуальным данным с мобильных устройств',
                'Визуализация маршрутов и узлов на карте',
                'Разграничение прав доступа для сотрудников'
            ],
            result: [
                'Количество ошибок при работах снизилось на 80%',
                'Оперативное управление изменениями в сети'
            ]
        },
        {
            id: 2,
            tabTitle: 'Магистральный оператор',
            icon: <Globe size={20} />,
            title: 'Управление емкостью и ресурсами',
            problem: 'Межгородские трассы, муфты на 288+ волокон. Сложно отслеживать арендованные ресурсы.',
            solution: [
                'Детальный учет каждого волокна на всем протяжении',
                'Автоматическая проверка связности маршрутов',
                'Учет арендованной оптики и темных волокон'
            ],
            result: [
                'Мгновенная оценка доступных мощностей',
                'Оптимизация использования кабельной инфраструктуры'
            ]
        }
    ];

    return (
        <Section id="cases" className={styles.useCasesSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>Кому подходит Fiber Atlas</h2>
                <p className={styles.subtitle}>
                    Решения для компаний любого масштаба — от локальных провайдеров до магистральных операторов.
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
                                <div className={styles.blockTitle}>Ситуация до</div>
                                <p className={styles.problemText}>{cases[activeTab].problem}</p>
                                <div className={styles.blockTitle}>Решение</div>
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
                                <div className={styles.blockTitle}>Результат</div>
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
