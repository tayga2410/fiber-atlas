import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fiber Atlas — Система учета ВОЛС в Казахстане | GIS для провайдеров",
  description: "Профессиональная система учета ВОЛС (GIS) для интернет-провайдеров Казахстана. Паспортизация сети, интерактивные схемы, управление муфтами и кабелями. Внедрение за 3 дня.",
  keywords: "учет ВОЛС, GIS для провайдера, паспортизация сети, схема разварки муфт, управление сетью ISP, Fiber Atlas, карта ВОЛС, Казахстан, учет оптоволокна",
  openGraph: {
    title: "Fiber Atlas — Система учета ВОЛС в Казахстане",
    description: "Профессиональная GIS-система для операторов связи. Паспортизация, мониторинг и управление сетью в одном окне.",
    type: "website",
    locale: "ru_RU",
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
