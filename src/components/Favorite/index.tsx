import pizza from "../../assets/pizza.svg";
import cake from "../../assets/cake.svg";
import hamburguer from "../../assets/hamburger.svg";
import sushi from "../../assets/sushi.svg";
import watermelon from "../../assets/watermelon.svg";
import noodle from "../../assets/noodle.svg";

import Image from "next/image";

export function FavoriteSection() {
  return (
    <div className="container mx-auto my-20">
      <div className="flex flex-col items-center justify-between pb-10">
        <span className="bg-[#5EAE53] text-white p-2 px-5 mb-5 rounded-xl">
          Categorias
        </span>
        <h3 className="font-bold text-6xl">Os favoritos</h3>
      </div>
      <div className="grid grid-cols-6 gap-5">
        {favorites.map((favorite) => (
          <div
            key={favorite.id}
            className="relative bg-[#F7F7F7] rounded-xl p-4 w-44 flex flex-col items-center justify-between py-7 group hover:bg-[#F49B3F] hover:text-white hover:shadow-2xl hover:cursor-pointer duration-300 hover:ease-in hover:scale-105"
          >
            <div className="bg-white p-10 rounded-full w-28 h-28">
              <Image src={favorite.image} alt="pizza" />
            </div>
            <span className="bg-[#AFD3AA] group-hover:bg-[#5EAE53] rounded-full text-white p-2 px-3 min-w-[42px] text-center absolute right-6">
              {favorite.number}
            </span>
            <h2 className="pt-4 text-xl">{favorite.name}</h2>
            <span className="text-sm pt-2 text-gray-400 group-hover:text-white">
              A partir de R$ ${favorite.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const favorites = [
  {
    id: 1,
    name: "Pizza",
    price: 60,
    image: pizza,
    number: 43,
  },
  {
    id: 2,
    name: "Cake",
    price: 80,
    image: cake,
    number: 31,
  },
  {
    id: 3,
    name: "Hamburguer",
    price: 90,
    image: hamburguer,
    number: 18,
  },
  {
    id: 4,
    name: "Sushi",
    price: 100,
    image: sushi,
    number: 24,
  },
  {
    id: 5,
    name: "Watermelon",
    price: 120,
    image: watermelon,
    number: 12,
  },
  {
    id: 6,
    name: "Noodle",
    price: 130,
    image: noodle,
    number: 8,
  },
];
