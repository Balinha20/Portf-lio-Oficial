"use client";

import {BsArrowBarRight, BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';

const services = [
    {
        num: "01",
        title: "Desenvolvedor Web",
        description: "Transforme suas ideias em realidade digital! Ofereço desenvolvimentos web personalizados, criando sites modernos, funcionais e intuitivos que destacam sua marca e atraem clientes. Vamos juntos elevar sua presença online!",
        href: "https://gamma.app/docs/Proposta-de-Desenvolvimento-Web-bp3bkkwzszhiimn",
    },
    {
        num: "02",
        title: "Logo Desing",
        description: "Dê uma identidade única à sua marca! Ofereço logo design personalizado, criando símbolos impactantes e memoráveis que capturam a essência do seu negócio. Vamos juntos destacar sua marca no mercado!",
        href: "https://gamma.app/docs/Criacao-de-Logomarca-Uma-Proposta-ypj4qxtn4nqyply",
    },
    {
        num: "03",
        title: "Contratos Empresariais",
        description: "Garanta segurança e clareza nos seus negócios! Ofereço contratos empresariais sob medida, protegendo seus interesses e facilitando acordos sólidos. Vamos juntos construir parcerias de sucesso!",
        href: "https://gamma.app/docs/Proposta-de-Contrato-Empresarial-f81mtfitlvxxqpz",
    },
    {
        num: "04",
        title: "Gestão de Marketing",
        description: "Impulsione seu negócio com estratégias poderosas! Ofereço serviços de marketing que conectam sua marca ao público certo, maximizando resultados e ampliando sua presença no mercado. Vamos juntos alcançar novos patamares!",
        href: "https://gamma.app/docs/Gestao-de-Marketing-Sua-Empresa-em-Destaque-jrng383j1401bwt",
    },
];

import { easeIn, motion } from 'framer-motion';

const Services = () => {
    return (
     <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div
             initial={{opacity: 0}}
             animate={{
              opacity: 1,
              transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
             }}
             className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
             {services.map((service, index)=> {
                return (
                 <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">

                    {/* top */}
                    <div className="w-full flex justify-between itens-center">
                        <div className="text-5xl font-extrabold text-outline text-transparent
                        group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                        <Link 
                            href={service.href}
                            className="w-[70px] h-[70px] rounded-full bg-white
                            group-hover:bg-accent transition-all duration-500 flex justify-center
                            items-center hover:-rotate-45"
                        >
                         <BsArrowDownRight className="text-primary text-3xl" />
                        </Link>
                    </div>

                    {/* titulo */}
                    <h2 className="text-[42px] font-bold leading-none text-white
                    group-hover:text-accent transition-all duration-500">
                      {service.title}
                    </h2>

                    {/* descrição */}
                    <p className="text-white/60">{service.description}</p>

                    {/* borda */}
                    <div className="border-b border-white/20 w-full"></div>
                 </div>
                );
             })}
            </motion.div>
        </div>
     </section>

    );
};

export default Services;