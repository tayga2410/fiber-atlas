import React from 'react';
import { Section } from '@/components/ui/Section';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import styles from './Terms.module.css';
import { LocaleParams } from '@/i18n/routing';

export async function generateMetadata({ params }: LocaleParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Terms' });
  
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function TermsPage({ params }: LocaleParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Terms' });

  const sections = t.raw('sections');

  return (
    <Section className={styles.pageSection}>
      <div className={styles.backWrapper}>
        <Link
          href="/"
          className={styles.backLink}
        >
          ← {t('backToHome')}
        </Link>
      </div>

      <header className={styles.header}>
        <h1 className={styles.title}>
          {t('title')}
        </h1>
        <p className={styles.date}>
          {t('lastUpdated')}: 7 {t('january')} 2026 {t('year')}
        </p>
      </header>

      <div className={styles.content}>
        <section className={styles.sectionIntro}>
          <p className={styles.introText}>
            {t('introText')}
          </p>
        </section>

        {sections.map((section: any, index: number) => (
          <section key={index} className={styles.section}>
            <h2 className={styles.heading}>{index + 1}. {section.title}</h2>
            <p className={styles.paragraph}>
              {section.content.split('\n').map((line: string, i: number) => (
                <React.Fragment key={i}>
                  {line}
                  {i < section.content.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </section>
        ))}
      </div>

      <footer className={styles.footer}>
        <Link
          href="/"
          className={styles.footerLink}
        >
          ← {t('backToHome')}
        </Link>
      </footer>
    </Section>
  );
}
