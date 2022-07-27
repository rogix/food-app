import type { NextPage } from "next";
import { FavoriteSection } from "../components/Favorite";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { UnitiesSection } from "../components/Unities";

const Home: NextPage = () => {
  return (
    <main>
      <section className="bg-emerald-600 min-h-screen">
        <Header />
        <MainContent />
      </section>
      <section className="bg-white">
        <FavoriteSection />
      </section>
      <UnitiesSection />
    </main>
  );
};

export default Home;
