import React from 'react';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import styles from './Privacy.module.css';

export default function PrivacyPage() {
    return (
        <Section className={styles.pageSection}>
            <div className={styles.backWrapper}>
                <Link
                    href="/"
                    className={styles.backLink}
                >
                    ← Вернуться на главную
                </Link>
            </div>

            <header className={styles.header}>
                <h1 className={styles.title}>
                    Политика конфиденциальности
                </h1>
                <p className={styles.date}>
                    Последнее обновление: 7 января 2026 г.
                </p>
            </header>

            <div className={styles.content}>
                <section className={styles.sectionIntro}>
                    <p className={styles.introText}>
                        Мы серьезно относимся к защите ваших персональных данных. В данном документе описано, как мы собираем, используем и защищаем информацию, которую вы предоставляете при использовании Fiber Atlas.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>1. Сбор информации</h2>
                    <p className={styles.paragraph}>
                        Мы собираем только те данные, которые необходимы для обеспечения работы сервиса и связи с вами. Это может включать ваше имя, адрес электронной почты, номер телефона и данные о вашей компании.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>2. Использование данных</h2>
                    <p className={styles.paragraphList}>
                        Ваши данные используются исключительно для обеспечения качественной работы Fiber Atlas:
                    </p>
                    <ul className={styles.list}>
                        {[
                            "Предоставление доступа к системе",
                            "Техническая поддержка и ответы на запросы",
                            "Улучшение качества нашего сервиса",
                            "Информирование о важных обновлениях системы"
                        ].map((item, i) => (
                            <li key={i} className={styles.listItem}>
                                <span className={styles.listBullet}>•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>3. Защита информации</h2>
                    <p className={styles.paragraph}>
                        Для каждого клиента мы разворачиваем отдельный VPS-сервер, что гарантирует изоляцию ваших данных от других пользователей. Мы используем современные методы шифрования и регулярно проводим резервное копирование.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>4. Передача третьим лицам</h2>
                    <p className={styles.paragraph}>
                        Мы не продаем и не передаем ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством Республики Казахстан.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>5. Изменения в политике</h2>
                    <p className={styles.paragraph}>
                        Мы оставляем за собой право вносить изменения в данную политику. Актуальная версия всегда доступна на этой странице.
                    </p>
                </section>
            </div>

            <footer className={styles.footer}>
                <Link
                    href="/"
                    className={styles.footerLink}
                >
                    ← На главную страницу
                </Link>
            </footer>
        </Section>
    );
}
