import sedan from "./assets/icon-sedans.svg"
import suv from "./assets/icon-suvs.svg"
import luxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main className="py-20 px-6 min-h-svh bg-offwhitebg">
      <section>
        <div className="bg-laranja">
          <img src={sedan} alt="Icone de carros sedan" />
          <h2 className="font-shoulders">Sedans</h2>
          <p className="font-deca">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/catalogo/carroceria/sedan/" target="_blank" className="font-deca">Ver Mais</a>
        </div>
        <div className="bg-verde">
          <img src={suv} alt="Icone de carros SUV" />
          <h2 className="font-shoulders">SUVs</h2>
          <p className="font-deca">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/catalogo/carroceria/suv/" target="_blank" className="font-deca">Ver Mais</a>

        </div>
        <div className="bg-verde-escuro">
          <img src={luxury} alt="Icone de carros Luxuosos" />
          <h2 className="font-shoulders">Luxuosos</h2>
          <p className="font-deca">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/catalogo/carroceria/coupe/" target="_blank" className="font-deca">Ver Mais</a> 
          
        </div>
      </section>
    </main>
  )
}
