import React from 'react';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import styles from './Terms.module.css';

export default function TermsPage() {
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
                    Условия использования
                </h1>
                <p className={styles.date}>
                    Последнее обновление: 7 января 2026 г.
                </p>
            </header>

            <div className={styles.content}>
                <section className={styles.sectionIntro}>
                    <p className={styles.introText}>
                        Используя сервис Fiber Atlas, вы соглашаетесь с данными условиями. Пожалуйста, внимательно ознакомьтесь с ними перед началом работы.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>1. Предоставление услуг</h2>
                    <p className={styles.paragraph}>
                        Fiber Atlas предоставляет доступ к облачной GIS-системе для учета инфраструктуры связи. Доступ предоставляется на условиях подписки. Мы гарантируем работоспособность системы и сохранность ваших данных в рамках выбранного тарифного плана.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>2. Обязанности пользователя</h2>
                    <p className={styles.paragraphList}>
                        Для обеспечения безопасности и стабильности работы системы, пользователь обязуется:
                    </p>
                    <ul className={styles.list}>
                        {[
                            "Предоставлять достоверную информацию при регистрации",
                            "Не использовать сервис для незаконных целей",
                            "Обеспечивать конфиденциальность своих учетных данных",
                            "Не передавать доступ третьим лицам без согласования"
                        ].map((item, i) => (
                            <li key={i} className={styles.listItem}>
                                <span className={styles.listBullet}>•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>3. Ограничение ответственности</h2>
                    <p className={styles.paragraph}>
                        Мы стремимся обеспечить бесперебойную работу сервиса, однако Fiber Atlas не несет ответственности за временные перебои в работе, вызванные техническими причинами на стороне провайдеров связи или действиями третьих лиц.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>4. Интеллектуальная собственность</h2>
                    <p className={styles.paragraph}>
                        Все права на программное обеспечение Fiber Atlas принадлежат разработчикам. Пользователю предоставляется право использования системы без права копирования, декомпиляции или модификации исходного кода.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.heading}>5. Расторжение соглашения</h2>
                    <p className={styles.paragraph}>
                        Мы оставляем за собой право приостановить доступ к сервису в случае грубого нарушения данных условий или при прекращении оплаты подписки более чем на 30 календарных дней.
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
