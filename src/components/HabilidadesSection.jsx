import { habilidadesTecnicas } from "../data/proyectos";

export const HabilidadesSection = () => {
    return (
        <section id="habilidades" className="w-full min-h-full flex flex-col gap-10 text-[#a803a0] bg-[#32FF6A] p-10">
            <h2 className="font-bold text-4xl">HABILIDADES TECNICAS</h2>
            <ul className="flex flex-col gap-2 border-l-8 pl-3 border-[#a803a0]">
                {habilidadesTecnicas.map( h => <li className="text-2xl">{h}</li>)}
            </ul>
        </section>
    );
};