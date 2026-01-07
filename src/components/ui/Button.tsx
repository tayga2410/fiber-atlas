import React from 'react';
import styles from './Button.module.css';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    target?: string;
    rel?: string;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className,
    children,
    href,
    target,
    rel,
    ...props
}) => {
    const classes = clsx(
        styles.btn,
        styles[variant],
        styles[size],
        className
    );

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={classes}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={classes}
            {...props}
        >
            {children}
        </button>
    );
};
