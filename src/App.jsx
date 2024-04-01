import sedan from "./assets/icon-sedans.svg"
import suv from "./assets/icon-suvs.svg"
import luxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main className="py-20 px-6 min-h-svh bg-offwhitebg antialiased lg:flex justify-center items-center">
      <section className="lg:flex">
        <div className="bg-laranja p-12 rounded-t-lg">
          <img src={sedan} alt="Icone de carros sedan" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
          <p className="font-deca mb-7 text-branco-off">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/catalogo/carroceria/sedan/" target="_blank" className="font-deca bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-laranja">Ver Mais</a>
        </div>
        <div className="bg-verde p-12">
          <img src={suv} alt="Icone de carros SUV" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
          <p className="font-deca mb-7 text-branco-off">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/catalogo/carroceria/suv/" target="_blank" className="font-deca bg-offwhitebg px-10 py-3 block w-fit rounded-3xl text-verde">Ver Mais</a>

        </div>
        <div className="bg-verde-escuro p-12 rounded-b-lg">
          <img src={luxury} alt="Icone de carros Luxuosos" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
          <p className="font-deca mb-7 text-branco-off">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/catalogo/carroceria/coupe/" target="_blank" className="font-deca bg-offwhitebg px-10 py-3 block w-fit rounded-3xl text-verde-escuro">Ver Mais</a> 
          
        </div>
      </section>
    </main>
  )
}
