import Sedans from "./components/Sedans"
import Suvs from "./components/Suvs"
import Luxo from "./components/Luxo"

export default function App() {
  return (
    <main className="py-20 px-6 min-h-svh bg-offwhitebg antialiased lg:flex justify-center items-center">
      <div className="lg:flex max-w-[920px]">
        <Sedans/>
        <Suvs/>
        <Luxo/>
      </div>
    </main>
  )
}
