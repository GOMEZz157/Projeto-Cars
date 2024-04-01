import luxury from "../assets/icon-luxury.svg"

export default function Luxo() {
  return (
        <div className="bg-verde-escuro p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
          <img src={luxury} alt="Icone de carros Luxuosos" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
          <p className="font-deca mb-7 text-branco-off lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/catalogo/carroceria/coupe/" target="_blank" className="font-deca bg-offwhitebg px-10 py-3 block w-fit rounded-3xl text-verde-escuro border-2 border-offwhitebg hover:bg-verde-escuro hover:text-offwhitebg">Ver Mais</a> 
          
        </div>
  )
}
