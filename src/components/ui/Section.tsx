import React from 'react';
import styles from './Section.module.css';
import { clsx } from 'clsx';

interface SectionProps {
    id?: string;
    className?: string;
    alt?: boolean;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
    id,
    className,
    alt = false,
    children
}) => {
    return (
        <section
            id={id}
            className={clsx(
                styles.section,
                alt && styles.alt,
                className
            )}
        >
            <div className={styles.container}>
                {children}
            </div>
        </section>
    );
};
