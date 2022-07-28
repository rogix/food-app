export function Footer() {
  return (
    <footer className="bg-[#333333]">
      <div className="container mx-auto p-10 mt-10">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold text-2xl text-white">Mega Lanche</h2>
          </div>
          <div>
            <ul className="flex justify-between items-center gap-5">
              <li>
                <a href="#" className="text-white">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Ajuda
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center border-t border-gray-500 mt-10 pt-5 w-full text-white">
          <p className="text-center">
            Todos os direitos reservados © 2020 - Mega Lanche
          </p>
        </div>
      </div>
    </footer>
  );
}
