import sedan from "../assets/icon-sedans.svg"

export default function Sedans() {
  return (
    <section className="bg-laranja p-12 max-lg:rounded-t-lg lg:rounded-l-lg flex flex-col justify-between">
      <div>
        <img src={sedan} alt="Icone de carros sedan" className="mb-7" />
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
        <p className="font-deca mb-7 text-branco-off">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
      </div>
      <a href="https://www.webmotors.com.br/catalogo/carroceria/sedan/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-deca bg-offwhitebg px-10 py-3 block w-fit rounded-3xl text-laranja border-2 border-offwhitebg hover:bg-laranja hover:text-offwhitebg">
        Ver Mais
      </a>
    </section>



  )
}
