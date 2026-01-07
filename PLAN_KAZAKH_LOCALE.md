# План внедрения казахского языка в Fiber Atlas

## Анализ текущего состояния

### Что есть сейчас:
- ✅ Установлена библиотека `next-intl` (v4.7.0)
- ✅ Создана структура папок `src/app/[locale]/`
- ❌ **Локализация НЕ внедрена** - все тексты захардкожены на русском
- ❌ Папка `messages/` пуста
- ❌ `next.config.ts` не настроен
- ❌ Нет файлов переводов

---

## Этап 1: Настройка инфраструктуры локализации

### Файлы для создания/изменения:

| Файл | Действие | Трудозатраты |
|------|----------|--------------|
| `next.config.ts` | Добавить конфигурацию next-intl | 1 час |
| `src/i18n/routing.ts` | Создать маршрутизацию с locale | 2 часа |
| `src/i18n/request.ts` | Создать конфигурацию запроса | 1 час |
| `src/app/[locale]/layout.tsx` | Добавить LocaleProvider | 1 час |
| `src/middleware.ts` | Создать middleware для перенаправления | 1 час |

### Структура конфигурации:

```typescript
// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

export default withNextIntl({
  // конфигурация
});
```

```typescript
// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // Список поддерживаемых locales
  locales: ['ru', 'en', 'kk'],
  // Default locale при отсутствии в URL
  defaultLocale: 'ru',
});
```

---

## Этап 2: Создание файлов переводов

### Структура файлов:

```
messages/
├── en.json
├── ru.json
└── kk.json
```

### Рекомендуемая структура JSON:

```json
{
  "Header": {
    "nav": {
      "features": "Возможности",
      "cases": "Кейсы",
      "comparison": "Сравнение",
      "contacts": "Контакты"
    },
    "cta": "Связаться",
    "phone": "8 700 777 44 45"
  },
  "Hero": {
    "badge": "Система учета ВОЛС №1",
    "title": "Полный контроль над инфраструктурой сети",
    "subtitle": "Профессиональная GIS-система для операторов связи...",
    "features": {
      "passportization": "Точная паспортизация",
      "schemes": "Интерактивные схемы"
    },
    "cta": "Начать внедрение"
  },
  "Footer": {
    "description": "Профессиональная система управления...",
    "product": "Продукт",
    "contacts": "Контакты",
    "whatsapp": "WhatsApp",
    "telegram": "Telegram",
    "copyright": "Все права защищены",
    "privacy": "Политика конфиденциальности",
    "terms": "Условия использования"
  }
  // ... остальные секции
}
```

### Трудозатраты:
| Задача | Трудозатраты |
|--------|--------------|
| Создать `en.json` (на основе существующих текстов) | 2 часа |
| Создать `ru.json` (извлечь из компонентов) | 2 часа |
| Создать `kk.json` (перевод на казахский) | 4-6 часов |

---

## Этап 3: Обновление компонентов

### Список компонентов для локализации:

| Компонент | Строк текста | Трудозатраты |
|-----------|--------------|--------------|
| `Header.tsx` | ~10 | 1 час |
| `Footer.tsx` | ~15 | 1 час |
| `Hero.tsx` | ~8 | 1 час |
| `Features.tsx` | ~20 | 2 часа |
| `Benefits.tsx` | ~15 | 1.5 часа |
| `Comparison.tsx` | ~25 | 2 часа |
| `UseCases.tsx` | ~30 | 2.5 часа |
| `CTA.tsx` | ~5 | 0.5 часа |
| `FAQ.tsx` | ~40 | 3 часа |
| `Contact.tsx` | ~10 | 1 час |
| `Showcase.tsx` | ~10 | 1 час |
| `Privacy.tsx` | ~50 | 3 часа |
| `Terms.tsx` | ~50 | 3 часа |

### Пример обновления компонента:

```tsx
// Было:
<h1>Полный контроль</h1>

// Стало:
import { useTranslations } from 'next-intl';

export const Hero = () => {
  const t = useTranslations('Hero');
  return <h1>{t('title')}</h1>;
};
```

---

## Этап 4: Переключатель языков

### Компонент LanguageSwitcher:

```tsx
// src/components/ui/LanguageSwitcher.tsx
'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: 'ru', name: 'Русский' },
    { code: 'kk', name: 'Қазақ' },
    { code: 'en', name: 'English' },
  ];

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <select value={locale} onChange={(e) => handleChange(e.target.value)}>
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}
```

### Трудозатраты: 2-3 часа

---

## Этап 5: SEO и мета-теги

### Обновление layout.tsx:

```tsx
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: Props) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Meta' });
  
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale: params.locale === 'kk' ? 'kk_KZ' : `${params.locale}_${params.locale.toUpperCase()}`,
    },
  };
}
```

### Трудозатраты: 2 часа

---

## Сводная таблица трудозатрат

| Этап | Задач | Трудозатраты |
|------|-------|--------------|
| 1. Инфраструктура | 5 | 6 часов |
| 2. Файлы переводов | 3 | 8-10 часов |
| 3. Компоненты | 13 | 22 часов |
| 4. LanguageSwitcher | 1 | 2-3 часа |
| 5. SEO | 1 | 2 часа |
| **Итого** | **23** | **40-43 часа** |

---

## Приоритизация

### Приоритет 1 (MVP - 1 неделя):
1. Настройка инфраструктуры
2. Header + Footer + Hero (переводы + LanguageSwitcher)
3. LanguageSwitcher в интерфейсе

### Приоритет 2 (2 неделя):
4. Features, Benefits, Comparison
5. UseCases, CTA
6. FAQ, Contact

### Приоритет 3 (3 неделя):
7. Privacy Policy + Terms (правовые документы на казахском)
8. SEO-мета-теги
9. Тестирование и доработки

---

## Технические решения

### URL-структура:
- `/ru/` - русский (по умолчанию)
- `/en/` - английский
- `/kk/` - казахский

### Middleware:
- Автоматическое определение языка браузера
- Перенаправление на соответствующий locale
- Сохранение позиции при переключении языка

### Формат переводов:
- JSON-файлы с группировкой по компонентам
- Плоская структура для простых текстов
- Вложенные объекты для форм множественного числа

---

## Риски и рекомендации

1. **Перевод на казахский**: Рекомендуется привлечь носителя языка для проверки
2. **SEO**: Добавить `hreflang` для корректной индексации поисковиками
3. **Тестирование**: Особое внимание мобильной версии LanguageSwitcher
4. **Производительность**: next-intl поддерживает tree-shaking, но нужно проверить bundle size

---

## Следующие шаги

1. ✅ Одобрить план
2. Переключиться в режим Code для реализации
3. Начать с Этапа 1 (инфраструктура)
