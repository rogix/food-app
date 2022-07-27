import lanche from "../../assets/lanche.jpg";
import frutas from "../../assets/frutas.jpg";
import legumes from "../../assets/legumes.jpg";
import carne from "../../assets/carne.jpg";

import Image from "next/image";

export function UnitiesSection() {
  return (
    <section>
      <div className="container mx-auto my-20">
        <div className="pb-10">
          <span className="bg-[#5EAE53] text-white p-2 px-5 mb-10 rounded-xl">
            Unidades
          </span>
          <h2 className="font-bold text-5xl mt-7 text-[#333333]">
            Unidades próximas
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <figure className="bg-[#F7F7F7] rounded-xl">
            <Image src={lanche} alt="unities" className="rounded-t-xl" />
            <figcaption className="p-4">
              <h2 className="font-bold text-2xl text-gray-700">Santa Lúzia</h2>
              <span className="text-gray-500">20-30 min</span>
            </figcaption>
          </figure>
          <figure className="bg-[#F7F7F7] rounded-xl">
            <Image src={frutas} alt="unities" className="rounded-t-xl" />
            <figcaption className="p-4">
              <h2 className="font-bold text-2xl text-gray-700">Santa Lúzia</h2>
              <span className="text-gray-500">~45 min</span>
            </figcaption>
          </figure>
          <figure className="bg-[#F7F7F7] rounded-xl">
            <Image src={legumes} alt="unities" className="rounded-t-xl" />
            <figcaption className="p-4">
              <h2 className="font-bold text-2xl text-gray-700">Santa Lúzia</h2>
              <span className="text-gray-500">30-45 min</span>
            </figcaption>
          </figure>
          <figure className="bg-[#F7F7F7] rounded-xl">
            <Image src={carne} alt="unities" className="rounded-t-xl" />
            <figcaption className="p-4">
              <h2 className="font-bold text-2xl text-gray-700">Santa Lúzia</h2>
              <span className="text-gray-500">20-30 min</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
