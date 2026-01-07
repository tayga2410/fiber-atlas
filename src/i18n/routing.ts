import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // Список поддерживаемых locales
  locales: ['ru', 'kk'],
  // Default locale при отсутствии в URL
  defaultLocale: 'ru',
});

// Re-export the navigation helpers
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

// Type for locale params
export type LocaleParams = {
  params: Promise<{ locale: string }>;
};
