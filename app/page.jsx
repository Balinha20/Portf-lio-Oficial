import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'

//componente
import Social from "@/components/ui/Socials"
import Photo from "@/components/ui/Photo"
import Stats from "@/components/ui/Stats"
import Link from "next/link"

const Home = () => {

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">A segurança da sua empresa em boas mãos.</span>
            <h1 className="h1 mb-6"> 
             Prazer,<br /> <span className="text-accent">Soares Kauan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Maximize a eficiência e a inovação do seu negócio com meu suporte.
            Conte comigo para impulsionar o seu sucesso e alcançar novos patamares.
            </p>

            {/* btn e social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="https://drive.google.com/file/d/1BqUbQNC6TqE06C9rcwUlWkQRpKYXPR4m/view?usp=drive_link">
                <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center
                  text-accent text-base hover:bg-accent hover:text-primary hover:transition-all
                  duration-500"
                />
              </div>
            </div>
          </div>

          {/* foto */}
          <div className="order-1 xl:order-none ,b-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home;