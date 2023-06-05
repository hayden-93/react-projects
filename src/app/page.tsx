"use client";

import { Header } from "./components/Header";
import QuestionsPage from "./questions/page";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <QuestionsPage />
      </main>
    </>
  );
}
