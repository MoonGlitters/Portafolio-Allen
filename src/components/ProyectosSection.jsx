import { ProyectoCard } from "./ProyectoCard";
import { proyectos } from "../data/proyectos";

export const ProyectosSection = () => {
    return (
        <section 
            id="proyectos"
            className="w-full min-h-screen py-20 px-8 flex flex-col gap-14 bg-[#00F0FF]"
        >
            <h2 className="text-4xl font-bold text-[#020157]">Proyectos Destacados</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {proyectos.map(p => (
                    <ProyectoCard key={p.id} proyecto={p} />
                ))}
            </div>
        </section>
    );
};