"use client";
import { Header } from "@/components/sidebar";
import CertificationSteps from "@/components/CertificationSteps";
export default function Home() {
  return (
    <>
      <header className="">
        <Header />
      </header>
      <main className="mt-20 p-6">
        <CertificationSteps />
      </main>
    </>
  );
}
