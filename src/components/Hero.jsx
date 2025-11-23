
export const Hero = () => {
    return (
        <section 
            id="hero"
            className="min-h-screen w-full flex flex-col xl:flex-row md:items-center justify-between px-10 py-20 bg-black text-white"
        >
            <div className="
                w-full
                min-h-full
                xl:w-3/5
                flex flex-col
                xl:flex-row
                items-center 
                justify-center 
                gap-8
                text-center md:text-left
            ">
                <div className="relative aspect-square w-[300px] sm:w-[450px] lg:w-[550px] flex-shrink-0 mx-auto">
                    <img
                        src="/profile.webp"
                        className="hero-img rounded-full w-full h-full object-cover object-left shadow-xl shadow-red-900/40"
                        alt="Allen Navarrete"
                    />
                </div>

                <div className="flex flex-col justify-center  gap-4 min-w-[250px] mt-8 md:mt-0">
                    <h1 className="hero-title text-4xl sm:text-7xl font-extrabold tracking-wide">
                        Allen Navarrete
                    </h1>

                    <p className="hero-text text-lg sm:text-3xl opacity-90">
                        Desarrollador Full-Stack | Ingeniería en Informática
                    </p>

                    <p className="hero-text text-2xl opacity-70">
                        Redes Sociales | Contacto
                    </p>

                    <div className="flex gap-5 justify-center md:justify-start hero-text">
                        <SocialIcon href="https://www.twitch.tv/ellenpark" icon="twitch" bg="bg-purple-400/30" />
                        <SocialIcon href="https://github.com/MoonGlitters" icon="github" bg="bg-gray-600/40" />
                        <SocialIcon href="https://www.linkedin.com/in/allen-navarrete-navarro-01a829390/" icon="linkedin" bg="bg-blue-400/30" />
                        <SocialIcon href="https://x.com/Lying_Daughters" icon="x" bg="bg-white/10" />
                    </div>
                </div>
            </div>

            <div className="w-full min-h-full flex justify-center items-center content-center mb-10 xl:mb-0 xl:w-2/5">
                <ul
                    className="flex flex-row justify-center items-center flex-wrap xl:flex-col xl:items-end gap-6 text-3xl sm:text-4xl font-bold select-none text-center xl:text-right">
                    <MenuLink index="01" text="Sobre mi" color="text-[#FF3B3B] hover:text-[#FF9A9A]" />
                    <MenuLink index="02" text="Enfoque" color="text-[#3B82FF] hover:text-[#9AC3FF]" />
                    <MenuLink index="03" text="Académico" color="text-[#F8E71C] hover:text-[#FFF47A]" />
                    <MenuLink index="04" text="Experiencia" color="text-[#FF2EC4] hover:text-[#FF8BE8]" />
                    <MenuLink index="05" text="Habilidades" color="text-[#32FF6A] hover:text-[#A2FFBE]" />
                    <MenuLink index="06" text="Proyectos" color="text-[#00F0FF] hover:text-[#8CF9FF]" />
                </ul>
            </div>

        </section>
    );
};

const SocialIcon = ({ href, icon, bg }) => (
    <a
        href={href}
        target="_blank"
        className={`${bg} size-12 flex items-center justify-center rounded-full hover:opacity-80 transition`}
    >
        <svg width="28" height="28">
            <use href={`/sprite.svg#${icon}`} />
        </svg>
    </a>
);

const MenuLink = ({ index, text, color }) => (
    <li>
        <a 
            href={`#${text.toLowerCase().replace(" ", "")}`}
            className={`transition-all duration-300 ${color}`}
        >
            {index} {text}
        </a>
    </li>
);