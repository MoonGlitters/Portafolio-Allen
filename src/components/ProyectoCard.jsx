export const ProyectoCard = ({ proyecto }) => {
    return (
        <a
            href={proyecto.repo}
            target="_blank"
            className="group relative rounded-2xl overflow-hidden aspect-square bg-neutral-900 border border-neutral-800"
        >
            <img
                src={proyecto.imagen}
                alt={proyecto.nombre}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-90"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                <h3 className="font-bold text-lg text-white">{proyecto.nombre}</h3>
                <p className="text-sm text-gray-300">{proyecto.tecnologias}</p>
            </div>
        </a>
    );
};