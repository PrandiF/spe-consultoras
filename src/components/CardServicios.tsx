import Image, { StaticImageData } from "next/image";

type CardServiciosProps = {
  img: string | StaticImageData;
  titulo?: string;
  descripcion1?: string;
  descripcion2?: string;
  descripcion3?: string;
  descripcion4?: string;
  descripcion5?: string;
  descripcion6?: string;
  descripcion7?: string;
  descripcion8?: string;
  reverse?: boolean;
};

function CardServicios({
  img,
  titulo,
  descripcion1,
  descripcion2,
  descripcion3,
  descripcion4,
  descripcion5,
  descripcion6,
  descripcion7,
  descripcion8,
  reverse,
}: CardServiciosProps) {
  return (
    <div
      className={`w-full shadow-[0_12px_20px_rgba(0,0,0,0.4)] flex xl:flex-row md:flex-row flex-col ${
        reverse ? "xl:flex-row-reverse md:flex-row-reverse" : ""
      } rounded-2xl`}
    >
      <div className={` xl:w-[30%] md:w-[30%] `}>
        <Image
          src={img}
          alt="Service Image"
          className={`w-full h-full object-cover block ${
            reverse
              ? "md:rounded-r-2xl rounded-t-2xl md:rounded-tl-none"
              : " md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none"
          }`}
        />
      </div>

      <div
        className={`xl:w-[70%] md:w-[70%] p-4 flex flex-col justify-start items-start gap-2 text-white bg-[#1A56D0]  overflow-hidden ${
          reverse
            ? " md:rounded-l-2xl rounded-b-2xl md:rounded-br-none pr-4"
            : " md:rounded-r-2xl rounded-b-2xl md:rounded-bl-none pl-4"
        }`}
      >
        <h3 className="md:text-3xl text-2xl font-semibold mt-2">{titulo}</h3>
        <ul className="list-disc ml-6 marker:text-[#FF7C28]">
          {descripcion1 && (
            <li className="text-base md:text-lg">{descripcion1}</li>
          )}
          {descripcion2 && (
            <li className="text-base md:text-lg">{descripcion2}</li>
          )}
          {descripcion3 && (
            <li className="text-base md:text-lg">{descripcion3}</li>
          )}
          {descripcion4 && (
            <li className="text-base md:text-lg">{descripcion4}</li>
          )}
          {descripcion5 && (
            <li className="text-base md:text-lg">{descripcion5}</li>
          )}
          {descripcion6 && (
            <li className="text-base md:text-lg">{descripcion6}</li>
          )}
          {descripcion7 && (
            <li className="text-base md:text-lg">{descripcion7}</li>
          )}
          {descripcion8 && (
            <li className="text-base md:text-lg">{descripcion8}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default CardServicios;
