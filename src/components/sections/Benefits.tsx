"use client";

import React from 'react';
import styles from './Benefits.module.css';
import { Section } from '../ui/Section';
import { Clock, TrendingUp, Coins, Rocket, Lock, Globe } from 'lucide-react';

export const Benefits = () => {
    const benefits = [
        {
            icon: <Clock size={32} />,
            value: "До 80%",
            label: "экономия времени на поиск",
            desc: "Мгновенный доступ к информации о любом элементе сети."
        },
        {
            icon: <Coins size={32} />,
            value: "До 50%",
            label: "снижение затрат",
            desc: "Оптимизация расходов на документирование и инвентаризацию."
        },
        {
            icon: <TrendingUp size={32} />,
            value: "До 3x",
            label: "скорость онбординга",
            desc: "Новые сотрудники быстрее вникают в структуру сети."
        },
        {
            icon: <Rocket size={32} />,
            value: "3 дня",
            label: "до начала работы",
            desc: "Быстрый старт благодаря готовым Docker-контейнерам."
        },
        {
            icon: <Lock size={32} />,
            value: "100%",
            label: "контроль действий",
            desc: "Полный журнал изменений и действий пользователей."
        },
        {
            icon: <Globe size={32} />,
            value: "1000+",
            label: "объектов на карте",
            desc: "Стабильная работа даже с очень крупными сетями."
        }
    ];

    return (
        <Section id="benefits">
            <div className={styles.header}>
                <h2 className={styles.title}>Измеримые результаты для бизнеса</h2>
                <p className={styles.subtitle}>
                    Цифры говорят сами за себя. Эффективность, подтвержденная практикой.
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
