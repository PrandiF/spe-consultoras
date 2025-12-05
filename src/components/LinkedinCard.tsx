import Image, { StaticImageData } from "next/image";
import {
  CalendarDays,
  ThumbsUp,
  MessageCircle,
  Send,
  MoreVertical,
} from "lucide-react";
import logoSpE from "../../public/speConsultoresLogoLinkedin.webp";

export type LinkedInCardProps = {
  logo?: string | StaticImageData;
  empresa?: string;
  fecha?: string;
  titulo?: string;
  descripcion: string;
  imagen?: string | StaticImageData;
  url?: string;
};

export default function LinkedInCard({
  logo,
  empresa,
  fecha = "1 día",
  titulo,
  descripcion,
  imagen,
  url,
}: LinkedInCardProps) {
  return (
    <a href={url} target="_blank" className="block w-full max-w-xl mx-auto">
      <div className="rounded-xl border bg-white shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden ">
        {/* Header estilo LinkedIn */}
        <div className="flex items-start justify-between p-4">
          <div className="flex items-center gap-3">
            <Image src={logoSpE} alt="logo" className="w-12 h-12 " />

            <div className="flex flex-col">
              <span className="font-semibold text-lg">SpE Consultores</span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <CalendarDays className="w-3 h-3" /> {fecha}
              </span>
            </div>
          </div>

          {/* 3 puntos */}
          <MoreVertical className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
        </div>

        <div className="w-full h-px bg-gray-200" />

        {/* Texto */}
        <div className="px-4 py-3 space-y-2 h-[150px] relative overflow-hidden">
          <p className="text-sm text-gray-800 leading-snug line-clamp-6">
            {descripcion.split(" ").map((word, idx) =>
              word.startsWith("#") ? (
                <span key={idx} className="text-blue-600">
                  {word}
                </span>
              ) : (
                <span key={idx}>{word} </span>
              )
            )}
          </p>

          {/* Fade + "Ver más" */}
          <div className="absolute bottom-0 left-0 w-full h-4 bg-linear-to-t from-white to-transparent flex items-end">
            <span className="text-gray-500 text-xs pl-4 pb-1">Ver más</span>
          </div>
        </div>

        {/* Imagen con blur overlay */}
        {imagen && (
          <div className="relative w-full h-[250px] overflow-hidden">
            {/* Imagen de fondo con blur */}
            <Image
              src={imagen}
              alt="bg blurred"
              className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
            />

            {/* Imagen principal visible, sin blur */}
            <Image
              src={imagen}
              alt="post image"
              className="relative w-[80%] h-full object-cover flex m-auto z-10"
            />

            {/* Oscurecedor opcional */}
            <div className="absolute inset-0 bg-black/30 z-0" />
          </div>
        )}

        {/* Footer solo iconos */}
        <div className="flex items-center justify-around px-6 py-3 text-gray-600 text-sm border-t">
          <ThumbsUp className="w-5 h-5 cursor-pointer hover:text-blue-600" />
          <MessageCircle className="w-5 h-5 cursor-pointer hover:text-blue-600" />
          <Send className="w-5 h-5 cursor-pointer hover:text-blue-600" />
        </div>
      </div>
    </a>
  );
}
