import type { NextPage } from "next";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";

const Home: NextPage = () => {
  return (
    <main>
      <section className="bg-emerald-600 min-h-screen">
        <Header />
        <MainContent />
      </section>
    </main>
  );
};

export default Home;
