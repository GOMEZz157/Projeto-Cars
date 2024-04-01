import suv from "../assets/icon-suvs.svg"

export default function Suvs() {
  return (
    <div className="bg-verde p-12">
          <img src={suv} alt="Icone de carros SUV" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
          <p className="font-deca mb-7 text-branco-off lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/catalogo/carroceria/suv/" target="_blank" className="font-deca bg-offwhitebg px-10 py-3 block w-fit rounded-3xl text-verde border-2 border-offwhitebg hover:bg-verde hover:text-offwhitebg">Ver Mais</a>

        </div>
  )
}
