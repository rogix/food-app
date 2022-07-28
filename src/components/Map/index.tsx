import pontosPretos from "../../assets/pontos-pretos.svg";
import man from "../../assets/man.svg";
import filter from "../../assets/filter.svg";
import map from "../../assets/map.svg";
import cdmx from "../../assets/cdmx.svg";
import pingGray from "../../assets/ping-gray.svg";

import Image from "next/image";

export function MapSection() {
  return (
    <section className="container mx-auto pt-20">
      <div className="grid grid-cols-2 gap-20">
        <div className="relative bg-[#FFE6E0] w-[448px] h-[464px] ml-16">
          <span className="absolute -right-20 -top-10">
            <Image src={pontosPretos} alt="pontos-pretos" />
          </span>
          <span className="absolute bottom-0 -right-16">
            <Image src={man} alt="homem" className="-scale-x-100" />
          </span>
          <span className="absolute -left-20 top-9">
            <Image src={filter} alt="filtro" />
          </span>
          <span className="absolute -right-36 top-44">
            <Image src={map} alt="mapa" />
          </span>
          <span className="absolute bottom-0">
            <Image src={cdmx} alt="cdmx" />
          </span>
        </div>
        <div>
          <span className="bg-[#5EAE53] text-white p-2 px-5 mb-5 rounded-xl">
            Mapa
          </span>
          <h2 className="font-bold text-6xl mt-10">
            Encontre no mapa o lugar mais próximo de você
          </h2>
          <div className="flex items-center mt-10">
            <div className="border inline-block pr-3 rounded-xl">
              <input
                type="text"
                placeholder="Cep"
                className="p-3 rounded-xl rounded-r-none mr-2"
              />
              <Image src={pingGray} alt="ping" className="-scale-x-100" />
            </div>
            <button className="bg-[#eb8e78] px-7 py-3 rounded-xl font-bold text-white ml-10">
              Buscar no mapa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
