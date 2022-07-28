import lanche from "../../assets/lanche.jpg";
import frutas from "../../assets/frutas.jpg";
import legumes from "../../assets/legumes.jpg";
import carne from "../../assets/carne.jpg";

import Image from "next/image";

export function Menus() {
  return (
    <section>
      <div className="container mx-auto my-20">
        <div className="pb-10">
          <span className="bg-[#5EAE53] text-white p-2 px-5 mb-10 rounded-xl">
            Menu
          </span>
          <h2 className="font-bold text-5xl mt-7 text-[#333333]">
            Os melhores menus
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <figure className="bg-[#F7F7F7] rounded-xl flex h-56">
            <Image
              src={lanche}
              alt="unities"
              className="rounded-l-xl"
              width={300}
              objectFit="cover"
            />
            <figcaption className="p-4 w-44">
              <h2 className="font-bold text-2xl text-gray-700">Pizza</h2>
              <span className="text-gray-500">20-30 min</span>
            </figcaption>
          </figure>
          <figure className="bg-[#F7F7F7] rounded-xl flex h-56">
            <Image
              src={frutas}
              alt="unities"
              className="rounded-l-xl"
              width={300}
              objectFit="cover"
            />
            <figcaption className="p-4">
              <h2 className="font-bold text-2xl text-gray-700">Lasanha</h2>
              <span className="text-gray-500">~45 min</span>
            </figcaption>
          </figure>
          <figure className="bg-[#F7F7F7] rounded-xl flex h-56">
            <Image
              src={legumes}
              alt="unities"
              className="rounded-l-xl"
              width={300}
              objectFit="cover"
            />
            <figcaption className="p-4">
              <h2 className="font-bold text-2xl text-gray-700">Peixe</h2>
              <span className="text-gray-500">30-45 min</span>
            </figcaption>
          </figure>
          <figure className="bg-[#F7F7F7] rounded-xl flex h-56">
            <Image
              src={carne}
              alt="unities"
              className="rounded-l-xl"
              width={300}
              objectFit="cover"
            />
            <figcaption className="p-4">
              <h2 className="font-bold text-2xl text-gray-700">Massas</h2>
              <span className="text-gray-500">20-30 min</span>
            </figcaption>
          </figure>
          <figure className="bg-[#F7F7F7] rounded-xl flex h-56">
            <Image
              src={carne}
              alt="unities"
              className="rounded-l-xl"
              width={300}
              objectFit="cover"
            />
            <figcaption className="p-4">
              <h2 className="font-bold text-2xl text-gray-700">Bebidas</h2>
              <span className="text-gray-500">20-30 min</span>
            </figcaption>
          </figure>
          <figure className="bg-[#F7F7F7] rounded-xl flex h-56">
            <Image
              src={carne}
              alt="unities"
              className="rounded-l-xl"
              width={300}
              objectFit="cover"
            />
            <figcaption className="p-4">
              <h2 className="font-bold text-2xl text-gray-700">Sobremesas</h2>
              <span className="text-gray-500">20-30 min</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
