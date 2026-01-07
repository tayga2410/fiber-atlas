"use client";

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Button } from '../ui/Button';
import { Menu, X, Map } from 'lucide-react';
import { clsx } from 'clsx';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Возможности', href: '#features' },
        { name: 'Кейсы', href: '#cases' },
        { name: 'Сравнение', href: '#comparison' },
        { name: 'Контакты', href: '#contact' },
    ];

    return (
        <header className={clsx(styles.header, isScrolled && styles.scrolled)}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="/images/logo.png?v=2" alt="Fiber Atlas Logo" className={styles.logoImage} />
                    <span className={styles.logoText}>Fiber Atlas</span>
                </div>

                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className={styles.navLink}>
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <span className={styles.phone}>8 700 777 44 45</span>
                    <Button size="sm" onClick={() => window.location.href = '#contact'}>
                        Связаться
                    </Button>
                </div>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={styles.mobileNavLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};
