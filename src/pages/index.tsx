import type { NextPage } from "next";
import { FavoriteSection } from "../components/Favorite";
import { FiliadoSection } from "../components/Franquia";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { MapSection } from "../components/Map";
import { Menus } from "../components/Menus";
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
      <MapSection />
      <Menus />
      <FiliadoSection />
    </main>
  );
};

export default Home;
