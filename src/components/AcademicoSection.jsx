import { AcademicoList } from "../data/proyectos";

export const AcademicoSection = () => {
    return (
        <section id="academico" className="w-full min-h-full flex flex-col gap-10 text-violet-900 p-10 bg-[#ffea00]">
                <h2 className="text-4xl font-bold">ACADEMICO</h2>
                <ul className="flex flex-col gap-2 border-l-8 pl-3 border-violet-900">
                    {AcademicoList.map( a => <li className="text-2xl"><strong>{a.int}</strong> - {a.int}</li>)}
                </ul>
                
        </section>
    );
};