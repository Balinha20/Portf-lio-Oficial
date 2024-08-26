"use client";

import {FaHtml5, FaCss3, FaJs, FaPython} from "react-icons/fa";
import {SiNextdotjs, SiPlanetscale} from "react-icons/si";

{/* sobre */}
const about = {
    title: "Sobre mim",
    descripition: "Com foco e dedicação estou buscando maior cuidado e comprometimento com seus dados. Estou focado em capturar o mercado de trabalho, visando a satisfação dos meus clientes e seu crescimento. Estou iniciando agora porém me dedicarei ao maximo para entregar uma ótima qualidade de serviço e atendimento.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Kauan Victor C. B. Soares",
        },
        {
            fieldName: "Contato",
            fieldValue: "(32) 99855-7197",
        },
        {
            fieldName: "Experiência",
            fieldValue: "2 anos",
        },
        {
            fieldName: "Email",
            fieldValue: "dev.skauan@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Analista de Sistemas",
        },
        {
            fieldName: "Idiomas",
            fieldValue: "Inglês",
        },
    ],
};

{/* experiencia */}
const experience ={
    icon: "/public/resume/badge.svg",
    title: "Minha experiência",
    descripition: "",
    item: [
        {
            company: "Helius - Energia Solar",
            position: "Adm",
            duration: "2022 - 2022",
        },
        {
            company: "MicroService Informática",
            position: "Técnico de Marketing e Informática",
            duration: "2022 - Atual",
        },
    ],
};

{/* formacao */}
const education ={
    icon: "/public/resume/cap.svg",
    title: "Formação",
    descripition: "",
    item: [
        {
            institution: "Faculdade - Unopar",
            degree: "Diploma em Analise e Desenvolvimento de Sistemas",
            duration: "2024",
        },
        {
            institution: "Pós Graduação - Unopar",
            degree: "Diploma em Desenvolvimento Back & Front-end",
            duration: "2024",
        },
        {
            institution: "Curso Online - IBSEC",
            degree: "Certificado em Hacker Ético",
            duration: "2024",
        },
        {
            institution: "Curso Online - Universidade Oracle",
            degree: "Certificado em Infraestrutura de Redes em Nuvem",
            duration: "2024",
        },
    ],
};

{/* linguagens */}
const skills = {
    title: "Minhas linguagens",
    descripition: "",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <FaPython />,
            name: "python",
        },
    ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition:
            {delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs 
                 defaultValue="experience"
                 className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experiência</TabsTrigger>
                        <TabsTrigger value="education">Formação</TabsTrigger>
                        <TabsTrigger value="skills">Linguagens</TabsTrigger>
                        <TabsTrigger value="about">Sobre mim</TabsTrigger>
                    </TabsList>

                    {/* geral */}
                    <div className="min-h-[70vh] w-full">
                        {/* experiencia */}
                        <TabsContent value="experience" className="w-full">
                          <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 m-auto xl:mx-0">{experience.descripition}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.item.map((item, index) => {
                                        return(
                                            <li 
                                             key={index}
                                             className="bg-[#232338] h-[184px] py-6 px-10 rounded-xl
                                             flex flex-col justify-center items-center lg:items-start
                                             gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                text-center lg:text-left">
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                          </div>    
                        </TabsContent>      

                        {/* formacao */}
                        <TabsContent value="education" className="w-full">
                          <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 m-auto xl:mx-0">{education.descripition}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.item.map((item, index) => {
                                        return(
                                            <li 
                                             key={index}
                                             className="bg-[#232338] h-[240px] py-1 px-10 rounded-xl
                                             flex flex-col justify-center items-center lg:items-start
                                             gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                text-center lg:text-left">
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                          </div>     
                        </TabsContent>

                        {/* linguagens */}
                        <TabsContent value="skills" className="w-full h-full">
                          <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.descripition}</p>
                            </div>
                            <ul className="grid grid-cols2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skillList.map((skill, index) => {
                                    return(
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px]
                                                    bg-[#232338] rounded-xl flex justify-center
                                                    items-center group">
                                                        <div className="text-6xl group-hover:text-accent
                                                        transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    )
                                })}
                            </ul>
                          </div>    
                        </TabsContent>

                        {/* sobre */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.descripition}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] 
                            mx-auto xl:mx-0">
                                {about.info.map((item, index) =>{
                                    return (
                                        <li key={index} className="flex items-center justify-center
                                        xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                          </div>    
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>

    );
};

export default Resume;