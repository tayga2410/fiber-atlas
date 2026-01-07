import { getTranslations } from "next-intl/server";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Features } from "@/components/sections/Features";
import { DemoVideo } from "@/components/sections/DemoVideo";
import { UseCases } from "@/components/sections/UseCases";
import { Benefits } from "@/components/sections/Benefits";
import { Comparison } from "@/components/sections/Comparison";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Showcase } from "@/components/sections/Showcase";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main>
      <Header />
      <Hero />
      <ProblemSolution />
      <Showcase />
      <Features />
      {/* <DemoVideo /> */}
      <UseCases />
      <Benefits />
      <Comparison />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
