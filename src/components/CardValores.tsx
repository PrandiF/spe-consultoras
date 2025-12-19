import Image, { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";

type CardValoresProps = {
  img: string | StaticImageData;
  imgCirculoAzul: string | StaticImageData;
  valor?: string;
  confidencialidad?: boolean;
};

function CardValores({
  img,
  imgCirculoAzul,
  valor,
  confidencialidad,
}: CardValoresProps) {
  const { t, i18n } = useTranslation();

  return (
    <div className="xl:w-64 md:w-64 w-55 h-80 bg-white rounded-3xl shadow-md overflow-hidden flex flex-col">
      {/* Imagen (50%) */}
      <div className="relative h-1/2">
        <Image
          src={img}
          alt="Handshake"
          className="w-full h-full object-cover"
        />

        {/* Degradado azul inferior */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-blue-900/70 to-transparent"></div>

        {/* Ícono circular */}

        <div className="absolute -bottom-6 left-4 w-12 h-12   bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
          {imgCirculoAzul && (
            <Image
              src={imgCirculoAzul}
              alt="Icono"
              width={32}
              height={32}
              className="object-contain flex m-auto"
            />
          )}
        </div>
      </div>

      {/* Texto (50%) */}
      <div className="h-1/2 px-4 flex items-center md:text-start text-center">
        <p
          className={`text-[#FF7C28] font-sans ${
            confidencialidad && i18n.language === "en"
              ? "flex flex-row-reverse gap-1"
              : ""
          }`}
        >
          <b>
            {confidencialidad && i18n.language === "en"
              ? t(`valores.${valor}.titulo`).toLowerCase()
              : t(`valores.${valor}.titulo`)}
          </b>
          {t(`valores.${valor}.descripcion`)}
        </p>
      </div>
    </div>
  );
}

export default CardValores;
