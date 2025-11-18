import Image, { StaticImageData } from "next/image";
import React from "react";

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
        <h3 className="text-2xl font-semibold mt-2">{titulo}</h3>

        {descripcion1 && (
          <p className="text-base">
            <span className="text-[#FF7C28] mr-1 font-semibold">&</span>
            {descripcion1}
          </p>
        )}
        {descripcion2 && (
          <p className="text-base">
            <span className="text-[#FF7C28] mr-1 font-semibold">&</span>
            {descripcion2}
          </p>
        )}
        {descripcion3 && (
          <p className="text-base">
            <span className="text-[#FF7C28] mr-1 font-semibold">&</span>
            {descripcion3}
          </p>
        )}
        {descripcion4 && (
          <p className="text-base">
            <span className="text-[#FF7C28] mr-1 font-semibold">&</span>
            {descripcion4}
          </p>
        )}
        {descripcion5 && (
          <p className="text-base">
            <span className="text-[#FF7C28] mr-1 font-semibold">&</span>
            {descripcion5}
          </p>
        )}
        {descripcion6 && (
          <p className="text-base">
            <span className="text-[#FF7C28] mr-1 font-semibold">&</span>
            {descripcion6}
          </p>
        )}
        {descripcion7 && (
          <p className="text-base">
            <span className="text-[#FF7C28] mr-1 font-semibold">&</span>
            {descripcion7}
          </p>
        )}
        {descripcion8 && (
          <p className="text-base">
            <span className="text-[#FF7C28] mr-1 font-semibold">&</span>
            {descripcion8}
          </p>
        )}
      </div>
    </div>
  );
}

export default CardServicios;
