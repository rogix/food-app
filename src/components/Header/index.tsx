export function Header() {
  return (
    <header className="flex justify-between container mx-auto text-white w-full">
      <h1 className="font-bold text-[56px]">Seu lanche</h1>
      <nav className="flex justify-center items-center gap-10">
        <a>Sobre nós</a>
        <a>Cardápio</a>
        <a>Unidades</a>
        <a>Mapa</a>
      </nav>
    </header>
  );
}
