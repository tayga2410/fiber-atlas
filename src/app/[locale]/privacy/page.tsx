import React from 'react';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import styles from './Privacy.module.css';
import { getTranslations } from 'next-intl/server';
import { LocaleParams } from '@/i18n/routing';

export default async function PrivacyPage({ params }: LocaleParams) {
    const { locale } = await params;
    const t = await getTranslations({
        locale,
        namespace: 'Privacy'
    });

    const content = t.raw('content');
    const sections = Object.entries(content)
        .filter(([key]) => key.startsWith('section'))
        .map(([key, value]: [string, any]) => value);

    return (
        <Section className={styles.pageSection}>
            <div className={styles.backWrapper}>
                <Link
                    href={`/${locale}`}
                    className={styles.backLink}
                >
                    ← {t('back')}
                </Link>
            </div>

            <header className={styles.header}>
                <h1 className={styles.title}>
                    {t('title')}
                </h1>
                <p className={styles.date}>
                    {t('lastUpdated')}
                </p>
            </header>

            <div className={styles.content}>
                <section className={styles.sectionIntro}>
                    <p className={styles.introText}>
                        {t('intro')}
                    </p>
                </section>

                {sections.map((section: any, index: number) => (
                    <section key={index} className={styles.section}>
                        <h2 className={styles.heading}>{section.title}</h2>
                        <p className={styles.paragraph}>
                            {section.text.split('\n').map((line: string, i: number) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i < section.text.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </p>
                    </section>
                ))}
            </div>

            <footer className={styles.footer}>
                <Link
                    href={`/${locale}`}
                    className={styles.footerLink}
                >
                    ← {t('home')}
                </Link>
            </footer>
        </Section>
    );
}
