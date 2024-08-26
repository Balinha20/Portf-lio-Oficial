"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Contato",
        descripition: "(32) 99855-7197",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        descripition: "dev.skauan@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Endereço",
        descripition: "Além Paraíba - MG",
    },
]

import { motion } from "framer-motion";

const Contact = () => {

    return (
     <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},}}
      className="py-6"
     >
       <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* formato */}
         <div className="xl:w-[54%] order-2 xl:order-none">
           <form className="flex flex-col gap-6 p-10 bg-[#292939] rounded-xl">
            <h3 className="text-4xl text-accent">Vamos trabalhar juntos!</h3>
            <p className="text-white/60">Conte comigo para cada passo da sua jornada!</p>
            {/* input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type=" nome" placeholder="Nome" />
                <Input type=" sobrenome" placeholder="Sobrenome" />
                <Input type=" email" placeholder="Email" />
                <Input type=" phone" placeholder="contato" />
            </div>

            {/* select */}
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um serviço"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Selecione o serviço</SelectLabel>
                        <SelectItem value="est">Desenvolvedor Web</SelectItem>
                        <SelectItem value="cst">Logo Desing</SelectItem>
                        <SelectItem value="dst">Contratos Empresariais</SelectItem>
                        <SelectItem value="mst">Gestão de Marketing</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            {/* textarea */}
            <Textarea className="h-[200px]" placeholder="Deixe sua mensagem aqui."/>

            {/* botao */}
            <Button size="md" className="max-w-40">Enviar</Button>
           </form>
         </div>

         {/* informações */}
         <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
                {info.map((item, index)=> {
                    return (
                        <li key={index} className="flex items-center gap-6">
                            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#292939]
                            text-accent rounded-md flex items-center justify-center">
                                <div className="text-[28px]">{item.icon}</div>
                            </div>
                            <div className="flex-1">
                                <p className="text-white/60">{item.title}</p>
                                <h3 className="text-xl">{item.descripition}</h3>
                            </div>
                        </li>
                    );
                })}
            </ul>
         </div>
        </div>
       </div>
     </motion.section>
    );
};

export default Contact;