"use client";

import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { Section } from '../ui/Section';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Как быстро можно внедрить систему?",
            answer: "Внедрение системы занимает в среднем 3 дня. Мы предоставляем готовое облачное решение, которое сразу готово к работе."
        },
        {
            question: "Входит ли техническая поддержка в стоимость?",
            answer: "Да, базовая техническая поддержка и обновления системы включены в стоимость подписки. Мы всегда на связи для решения ваших вопросов."
        },
        {
            question: "Можно ли адаптировать систему под наши стандарты?",
            answer: "Fiber Atlas имеет гибкие настройки. Вы можете самостоятельно настраивать типы объектов, расцветки кабелей и другие параметры под свои стандарты."
        },
        {
            question: "Как часто выходят обновления?",
            answer: "Мы постоянно развиваем систему и выпускаем обновления с новым функционалом и улучшениями безопасности несколько раз в месяц."
        },
        {
            question: "Нужно ли устанавливать ПО на компьютеры?",
            answer: "Нет, Fiber Atlas — это облачное решение. Вам нужен только современный браузер. Система работает на Windows, macOS и Linux."
        },
        {
            question: "Есть ли мобильная версия?",
            answer: "Да, интерфейс полностью адаптивен. Инженеры могут просматривать схемы и карту прямо со смартфонов или планшетов в полевых условиях."
        }
    ];

    return (
        <Section id="faq" className={styles.faqSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>Часто задаваемые вопросы</h2>
                <p className={styles.subtitle}>
                    Ответы на популярные вопросы о внедрении и работе системы.
                </p>
            </div>

            <div className={styles.container}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <button
                            className={styles.questionBtn}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span>{faq.question}</span>
                            {openIndex === index ? <ChevronUp size={20} className={styles.icon} /> : <ChevronDown size={20} className={styles.icon} />}
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={styles.answerWrapper}
                                >
                                    <div className={styles.answer}>
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </Section>
    );
};
