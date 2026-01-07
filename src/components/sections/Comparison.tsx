"use client";

import React from 'react';
import styles from './Comparison.module.css';
import { Section } from '../ui/Section';
import { Check, X } from 'lucide-react';

export const Comparison = () => {
    const rows = [
        {
            feature: "Точность позиционирования",
            atlas: "Сантиметровая точность, привязка к реальным опорам и колодцам",
            manual: "Приблизительные метки на Google/Yandex картах, погрешность до 15 метров",
            status: "atlas"
        },
        {
            feature: "Схемы коммутации",
            atlas: "Детальные схемы разварки муфт и кроссов в едином интерфейсе",
            manual: "Разрозненные Excel-файлы или бумажные журналы, которые сложно обновлять",
            status: "atlas"
        },
        {
            feature: "Учет специфики ВОЛС",
            atlas: "Учет типов кабелей, волоконности, затуханий и запасов кабеля",
            manual: "Общие инструменты рисования, не учитывающие специфику оптики",
            status: "atlas"
        },
        {
            feature: "Поиск и доступ",
            atlas: "Мгновенный поиск любой муфты или абонента по всей сети",
            manual: "Перебор десятков вкладок Excel или поиск нужной папки на диске",
            status: "atlas"
        },
        {
            feature: "Надежность данных",
            atlas: "Полная история изменений и облачное хранение с бэкапами",
            manual: "Риск случайного удаления или повреждения файлов без возможности отката",
            status: "atlas"
        }
    ];

    return (
        <Section id="comparison" className={styles.comparisonSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>Fiber Atlas vs Старые методы</h2>
                <p className={styles.subtitle}>
                    Сравните эффективность специализированной GIS-системы с традиционным учетом в таблицах и общих картах.
                </p>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.thFeature}>Функционал</th>
                            <th className={`${styles.th} ${styles.thPrimary}`}>Fiber Atlas</th>
                            <th className={styles.th}>Excel / Общие карты</th>
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
