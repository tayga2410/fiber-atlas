"use client";

import React from 'react';
import styles from './Showcase.module.css';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';

export const Showcase = () => {
    const items = [
        {
            image: '/images/any_distance.png',
            title: 'Прокладывайте кабеля на любую дистанцию в один клик',
            description: 'Полная свобода действий: создавайте линии связи любой протяженности с неограниченным количеством поворотов.'
        },
        {
            image: '/images/entities and cables.png',
            title: 'Выбор объектов, типов кабелей, расцветок, типов линий, ширины',
            description: 'Полная кастомизация отображения под стандарты вашей компании. Настраивайте каждый элемент сети индивидуально.'
        },
        {
            image: '/images/scheme.png',
            title: 'Выбирайте любое расположение кабелей, кабельных линий внутри схем',
            description: 'Все понятно и нативно — не нужно угадывать как что и где. Интуитивно понятный интерфейс для работы с внутренними коммутациями.'
        }
    ];

    return (
        <Section id="showcase" className={styles.showcaseSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>Интерфейс, с которым приятно работать</h2>
                <p className={styles.subtitle}>
                    Продуманный UX/UI дизайн для максимальной эффективности ваших инженеров.
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
                                alt={item.title}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.textContent}>
                            <h3 className={styles.itemTitle}>{item.title}</h3>
                            <p className={styles.itemDescription}>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
