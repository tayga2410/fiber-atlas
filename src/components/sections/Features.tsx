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

export const Features = () => {
    const features = [
        {
            icon: <MapIcon size={32} />,
            title: "Интерактивная карта",
            description: "Визуальное управление всей сетью на картах Yandex, Google или OpenStreetMap."
        },
        {
            icon: <Layers size={32} />,
            title: "Редактор схем",
            description: "Встроенный инструмент для создания детальных схем коммутации муфт и кроссов."
        },
        {
            icon: <Zap size={32} />,
            title: "Быстрая работа",
            description: "Мгновенный поиск объектов, фильтрация по типам и статусам в реальном времени."
        },
        {
            icon: <Database size={32} />,
            title: "Единая база",
            description: "Централизованное хранение данных о кабелях, оборудовании и абонентах."
        },
        {
            icon: <Layout size={32} />,
            title: "Удобный интерфейс",
            description: "Современный дизайн, адаптированный под задачи инженеров и диспетчеров."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Приватность и защита",
            description: "Отдельный VPS-сервер для каждого клиента. Ваши данные изолированы и надежно защищены."
        }
    ];

    return (
        <Section id="features" className={styles.featuresSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>Возможности системы</h2>
                <p className={styles.subtitle}>
                    Все необходимые инструменты для эффективного управления телеком-инфраструктурой в одном окне.
                </p>
            </div>

            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            {feature.icon}
                        </div>
                        <h3 className={styles.cardTitle}>{feature.title}</h3>
                        <p className={styles.cardDescription}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};
