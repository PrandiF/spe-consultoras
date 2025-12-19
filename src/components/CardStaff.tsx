import Image, { StaticImageData } from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";

type CardStaffProps = {
  socio?: boolean;
  director?: boolean;
  empleado?: boolean;
  img: string | StaticImageData;
  nombre?: string;
  puesto?: string;
  bio?: string;
  linkedin?: string;
};

function CardStaff({
  socio,
  director,
  empleado,
  img,
  nombre,
  puesto,
  bio,
  linkedin,
}: CardStaffProps) {
  return (
    <div
      className={`${socio && "flex md:flex-row flex-col md:w-full w-56"} ${
        director && "flex md:flex-row flex-col md:w-full w-56"
      } ${
        empleado && "flex flex-col xl:w-[22%] w-56"
      } bg-white rounded-2xl md:shadow-2xl shadow-lg 
`}
    >
      <div
        className={`${
          socio &&
          "xl:w-[30%] xl:justify-center xl:items-center md:items-start pl-3"
        } ${director && "md:w-[45%] justify-center items-center"} ${
          empleado && "justify-center items-center"
        } flex py-2`}
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
        <h2 className="font-semibold md:text-[22px] text-xl text-[#1A56D0]">
          {nombre}
        </h2>
        <p className="text-[#FF7C28] md:text-lg text-[18px] font-bold">
          {puesto}
        </p>
        {socio && (
          <p className="md:flex hidden text-[#1A56D0] whitespace-pre-line leading-tight">
            {bio}
          </p>
        )}
        {linkedin && (
          // <a
          //   className="text-center hover:underline cursor-pointer text-[#1A56D0] mt-5"
          //   href={linkedin}
          //   target="_blank"
          // >
          //   Ir a Linkedin →
          // </a>
          <a
            className="bg-[#1A56D0] mt-3 mx-auto w-12 h-8 rounded-sm flex  items-center justify-center shadow-md cursor-pointer hover:bg-[#1549b1] transition-all duration-100"
            href={linkedin}
            target="_blank"
          >
            <FaLinkedinIn className="text-white text-sm" />
          </a>
        )}
      </div>
    </div>
  );
}

export default CardStaff;
