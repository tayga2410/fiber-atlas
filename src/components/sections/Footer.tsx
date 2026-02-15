"use client";

import React from 'react';
import styles from './Footer.module.css';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export const Footer = () => {
    const t = useTranslations('Footer');
    const pathname = usePathname();

    // Get current locale from pathname
    const locale = pathname.startsWith('/kk') ? 'kk' : 'ru';

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <img src="/gs-logo.png" alt="GIS Connect Logo" className={styles.logoImage} />
                        </div>
                        <p className={styles.description}>
                            {t('description')}
                        </p>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>{t('product')}</h4>
                        <ul className={styles.links}>
                            <li><a href="#features">{t('Header.nav.features')}</a></li>
                            <li><a href="#cases">{t('Header.nav.cases')}</a></li>
                            <li><a href="#comparison">{t('Header.nav.comparison')}</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>{t('contacts')}</h4>
                        <ul className={styles.links}>
                            <li><a href="https://wa.me/77015338840" target="_blank" rel="noopener noreferrer">{t('Header.phone')}</a></li>
                            <li><a href="https://wa.me/77015338840" target="_blank" rel="noopener noreferrer">{t('whatsapp')}</a></li>
                            <li><a href="https://t.me/tayga_dev" target="_blank" rel="noopener noreferrer">{t('telegram')}</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.copyright}>
                        © 2024-2026 GIS Connect. {t('copyright')}
                    </div>
                    <div className={styles.legal}>
                        <a href={`/${locale}/privacy`}>{t('privacy')}</a>
                        <a href={`/${locale}/terms`}>{t('terms')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
