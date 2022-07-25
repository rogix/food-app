import copo from "../../assets/copo.svg";
import ping from "../../assets/ping.svg";
import pontosBrancosMenor from "../../assets/pontos-brancos-menor.svg";
import pontosBrancos from "../../assets/pontos-brancos.svg";
import prato from "../../assets/prato.svg";
import tabua from "../../assets/tabua.svg";

import Image from "next/image";

export function MainContent() {
  return (
    <div className="grid grid-cols-2 pt-28 container mx-auto">
      <article>
        <h3 className="text-yellow-600 text-3xl">Seu lugar favorito</h3>
        <h2 className="text-white font-bold text-7xl">
          A melhor comida que você conhece pelo melhor preço
        </h2>
        <div className="bg-white inline-flex p-1 pl-6 rounded-xl mt-16 mb-60">
          <input type="text" placeholder="Buscar" />
          <button className="bg-[#eb8e78] px-7 py-3 rounded-xl font-bold text-white">
            Buscar
          </button>
        </div>
        <div className="flex gap-5 mb-8">
          <span className="rounded-full bg-salmao-100 px-5 py-3 text-white font-bold">
            f
          </span>
          <span className="rounded-full bg-salmao-100 px-5 py-3 text-white font-bold">
            t
          </span>
          <span className="rounded-full bg-salmao-100 px-5 py-3 text-white font-bold">
            i
          </span>
        </div>
      </article>
      <div className="relative  w-[600px] h-[500px]">
        <span className="absolute -top-6 left-6">
          <Image src={pontosBrancos} alt="pontos-brancos" />
        </span>
        <span className="absolute right-6 -top-8 z-10">
          <Image src={copo} alt="copo" />
        </span>
        <span className="absolute right-16 -bottom-2 z-10 bg-slate-300 rounded-full pt-6 pb-4 px-8 ">
          <Image src={ping} alt="ping" />
        </span>
        <span className="absolute -bottom-20 -left-6">
          <Image src={prato} alt="prato" />
        </span>
        <span className="absolute top-[50%] -translate-y-2/4 text-center w-full">
          <Image src={tabua} alt="tabua" />
        </span>
        <span className="absolute bottom-24 right-16">
          <Image src={pontosBrancosMenor} alt="pontos-brancos-menor" />
        </span>
      </div>
    </div>
  );
}
