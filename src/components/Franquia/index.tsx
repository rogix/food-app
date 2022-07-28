import pontosPretos from "../../assets/pontos-pretos.svg";
import chef from "../../assets/chef.svg";
import filter from "../../assets/filter.svg";
import mapPoint from "../../assets/map-point.svg";
import coffe from "../../assets/coffee.svg";
import pingGray from "../../assets/ping-gray.svg";

import Image from "next/image";

export function FiliadoSection() {
  return (
    <section className="container mx-auto pt-20">
      <div className="grid grid-cols-2 gap-20">
        <div className="relative bg-[#E7C194] w-[448px] h-[464px] rounded-2xl ml-16">
          <span className="absolute bottom-0 ">
            <Image src={chef} alt="homem" />
          </span>
          <span className="absolute -left-10 top-9">
            <Image src={pontosPretos} alt="filtro" />
          </span>
          <span className="absolute -right-32 top-12">
            <Image src={mapPoint} alt="mapa" />
          </span>
          <span className="absolute bottom-0 -left-20">
            <Image src={coffe} alt="cdmx" />
          </span>
        </div>
        <div>
          <span className="bg-[#5EAE53] text-white p-2 px-5 mb-5 rounded-xl">
            Mapa
          </span>
          <h2 className="font-bold text-6xl mt-10">
            Seja um franqueado você também
          </h2>
          <div className="flex items-center mt-10">
            <button className="bg-[#eb8e78] px-7 py-3 rounded-xl font-bold text-white">
              Buscar no mapa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
