
import { Hero } from "../components/Hero";
import { SobreMiSection } from "../components/SobreMiSection";
import { ProyectosSection } from "../components/ProyectosSection";
import { HabilidadesSection } from "../components/HabilidadesSection";
import { AcademicoSection } from "../components/AcademicoSection";
import { EnfoqueSection } from "../components/EnfoqueSection";
import { ExperienciaSection } from "../components/ExperienciaSection";


export const Home = () => {
        return (
        <>
        <Hero />
        <SobreMiSection />
        <EnfoqueSection />
        <AcademicoSection />
        <ExperienciaSection/>
        <HabilidadesSection />
        <ProyectosSection />
        </>
    );
};