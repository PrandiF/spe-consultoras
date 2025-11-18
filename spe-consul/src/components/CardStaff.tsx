import Image, { StaticImageData } from "next/image";
import React from "react";

type CardStaffProps = {
  socio?: boolean;
  director?: boolean;
  empleado?: boolean;
  img: string | StaticImageData;
  nombre?: string;
  puesto?: string;
  bio?: string;
};

function CardStaff({
  socio,
  director,
  empleado,
  img,
  nombre,
  puesto,
  bio,
}: CardStaffProps) {
  return (
    <div
      className={`${socio && "flex md:flex-row flex-col md:w-full w-58"} ${
        director && "flex md:flex-row flex-col md:w-full w-58"
      } ${
        empleado && "flex flex-col md:w-[22%] w-58"
      } bg-white rounded-2xl md:shadow-2xl shadow-lg 
`}
    >
      <div
        className={`${socio && "md:w-[30%]"} ${
          director && "md:w-[45%]"
        } flex justify-center items-center py-2`}
      >
        <Image src={img} alt="Staff Image" className="w-[90%]" />
      </div>
      <div
        className={`${
          socio &&
          "md:w-[70%] md:justify-start md:items-start md:text-start text-center px-6"
        } ${
          director && "md:w-[55%] justify-center  text-center"
        } flex flex-col ${empleado && "text-center px-1"} py-12`}
      >
        <h2 className="font-semibold md:text-lg text-xl text-[#1A56D0]">
          {nombre}
        </h2>
        <p className="text-[#FF7C28] md:text-base text-lg">{puesto}</p>
        {socio && <p className="md:flex hidden text-[#1A56D0]">{bio}</p>}
      </div>
    </div>
  );
}

export default CardStaff;
