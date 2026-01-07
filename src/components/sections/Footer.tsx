"use client";

import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <img src="/images/logo.png?v=2" alt="Fiber Atlas Logo" className={styles.logoImage} />
                            <span className={styles.logoText}>Fiber Atlas</span>
                        </div>
                        <p className={styles.description}>
                            Профессиональная система управления телекоммуникационной инфраструктурой.
                        </p>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Продукт</h4>
                        <ul className={styles.links}>
                            <li><a href="#features">Возможности</a></li>
                            <li><a href="#cases">Кейсы</a></li>
                            <li><a href="#comparison">Сравнение</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Контакты</h4>
                        <ul className={styles.links}>
                            <li><a href="https://wa.me/77007774445" target="_blank" rel="noopener noreferrer">8 700 777 44 45</a></li>
                            <li><a href="https://wa.me/77007774445" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                            <li><a href="https://t.me/fiberatlas" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.copyright}>
                        © 2024-2026 Fiber Atlas. Все права защищены.
                    </div>
                    <div className={styles.legal}>
                        <a href="/privacy">Политика конфиденциальности</a>
                        <a href="/terms">Условия использования</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
