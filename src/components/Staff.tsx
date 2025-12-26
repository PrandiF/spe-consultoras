import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import EnzoPotes from "../../public/empleados/EnzoPotesPouyanne.webp";
import CardStaff from "./CardStaff";
import Carousel from "./Carousel";
import ArianaLopez from "../../public/empleados/ArianaLopezPasquare.webp";
import EugeniaSilvestre from "../../public/empleados/EugeniaSilvestre.webp";
import FabianFalco from "../../public/empleados/FabianFalco.webp";
import FaustoMendoza from "../../public/empleados/FaustoMendozaJoy.webp";
import JoaquinVilaplana from "../../public/empleados/JoaquinVilaplana.webp";
import GenovevaSposetti from "../../public/empleados/GenovevaSposetti.webp";
import EvelynVallejos from "../../public/empleados/EvelynVallejos.webp";
import DamianJuarez from "../../public/empleados/DamianJuarez.webp";
import GonzaloDiaz from "../../public/empleados/GonzaloDiaz.webp";
import SusanaMaggiorini from "../../public/empleados/SusanaMaggiorini.webp";
import NicolasCastano from "../../public/empleados/NicolasCastano.webp";
import FlorenciaTaranto from "../../public/empleados/FlorenciaTaranto.webp";
import AOS from "aos";
import "aos/dist/aos.css";

type StaffProps = {
  id?: string;
};

function Staff({ id }: StaffProps) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const { t } = useTranslation();

  return (
    <div
      id={id}
      className="flex flex-col gap-6 items-center justify-center mx-auto rounded-3xl py-10 px-8"
      data-aos="fade"
      data-aos-duration="1200"
    >
      <div
        className="flex gap-2 text-center justify-center"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <p className="font-bold text-4xl md:text-5xl text-[#003DA6]">
          {t("staff.titulo")}
        </p>
        <p className="font-bold text-4xl md:text-5xl text-[#FF7C28]">
          {t("staff.titulo2")}
        </p>
      </div>

      <div
        className="flex md:flex-col gap-6 items-start justify-center bg-[#F0F0F0] xl:w-[82%] w-[95%] mx-auto rounded-3xl py-10 md:px-7 shadow-[0_12px_20px_rgba(0,0,0,0.4)]"
        data-aos="fade"
        data-aos-duration="1100"
        data-aos-delay="500"
      >
        <div className="md:flex w-full hidden">
          <CardStaff
            img={FabianFalco}
            socio
            nombre={t("staff.FabianFalco.nombre")}
            puesto={t("staff.FabianFalco.puesto")}
            bio={t("staff.FabianFalco.bio")}
          />
        </div>

        <div className="md:flex hidden mx-auto gap-4 justify-center w-full">
          <CardStaff
            img={GenovevaSposetti}
            director
            nombre={t("staff.GenovevaSposetti.nombre")}
            puesto={t("staff.GenovevaSposetti.puesto")}
            linkedin={t("staff.GenovevaSposetti.linkedin")}
          />
          <CardStaff
            img={SusanaMaggiorini}
            director
            nombre={t("staff.SusanaMaggiorini.nombre")}
            puesto={t("staff.SusanaMaggiorini.puesto")}
            linkedin={t("staff.SusanaMaggiorini.linkedin")}
          />
        </div>
        <div className="md:flex hidden flex-wrap md:gap-4 xl:gap-10 justify-center w-full">
          <CardStaff
            img={NicolasCastano}
            empleado
            nombre={t("staff.NicolasCastano.nombre")}
            puesto={t("staff.NicolasCastano.puesto")}
            linkedin={t("staff.NicolasCastano.linkedin")}
          />
          <CardStaff
            img={DamianJuarez}
            empleado
            nombre={t("staff.DamianJuarez.nombre")}
            puesto={t("staff.DamianJuarez.puesto")}
            linkedin={t("staff.DamianJuarez.linkedin")}
          />
          <CardStaff
            img={GonzaloDiaz}
            empleado
            nombre={t("staff.GonzaloDiaz.nombre")}
            puesto={t("staff.GonzaloDiaz.puesto")}
            linkedin={t("staff.GonzaloDiaz.linkedin")}
          />
          <CardStaff
            img={EvelynVallejos}
            empleado
            nombre={t("staff.EvelynVallejos.nombre")}
            puesto={t("staff.EvelynVallejos.puesto")}
            linkedin={t("staff.EvelynVallejos.linkedin")}
          />
          <CardStaff
            img={EnzoPotes}
            empleado
            nombre={t("staff.EnzoPotesPouyanne.nombre")}
            puesto={t("staff.EnzoPotesPouyanne.puesto")}
            linkedin={t("staff.EnzoPotesPouyanne.linkedin")}
          />
          <CardStaff
            img={JoaquinVilaplana}
            empleado
            nombre={t("staff.JoaquinVilaplana.nombre")}
            puesto={t("staff.JoaquinVilaplana.puesto")}
            linkedin={t("staff.JoaquinVilaplana.linkedin")}
          />
          <CardStaff
            img={ArianaLopez}
            empleado
            nombre={t("staff.ArianaLopezPasquare.nombre")}
            puesto={t("staff.ArianaLopezPasquare.puesto")}
            linkedin={t("staff.ArianaLopezPasquare.linkedin")}
          />
          <CardStaff
            img={EugeniaSilvestre}
            empleado
            nombre={t("staff.EugeniaSilvestre.nombre")}
            puesto={t("staff.EugeniaSilvestre.puesto")}
            linkedin={t("staff.EugeniaSilvestre.linkedin")}
          />
          <CardStaff
            img={FaustoMendoza}
            empleado
            nombre={t("staff.FaustoMendozaJoy.nombre")}
            puesto={t("staff.FaustoMendozaJoy.puesto")}
            linkedin={t("staff.FaustoMendozaJoy.linkedin")}
          />
          <CardStaff
            img={FlorenciaTaranto}
            empleado
            nombre={t("staff.FlorenciaTaranto.nombre")}
            puesto={t("staff.FlorenciaTaranto.puesto")}
            linkedin={t("staff.FlorenciaTaranto.linkedin")}
          />
        </div>

        <div className="w-full mx-auto overflow-visible flex md:hidden">
          <Carousel>
            <CardStaff
              img={FabianFalco}
              socio
              nombre={t("staff.FabianFalco.nombre")}
              puesto={t("staff.FabianFalco.puesto")}
              bio={t("staff.FabianFalco.bio")}
            />
            <CardStaff
              img={GenovevaSposetti}
              director
              nombre={t("staff.GenovevaSposetti.nombre")}
              puesto={t("staff.GenovevaSposetti.puesto")}
              linkedin={t("staff.GenovevaSposetti.linkedin")}
            />
            <CardStaff
              img={SusanaMaggiorini}
              director
              nombre={t("staff.SusanaMaggiorini.nombre")}
              puesto={t("staff.SusanaMaggiorini.puesto")}
              linkedin={t("staff.SusanaMaggiorini.linkedin")}
            />
            <CardStaff
              img={NicolasCastano}
              empleado
              nombre={t("staff.NicolasCastano.nombre")}
              puesto={t("staff.NicolasCastano.puesto")}
              linkedin={t("staff.NicolasCastano.linkedin")}
            />
            <CardStaff
              img={DamianJuarez}
              empleado
              nombre={t("staff.DamianJuarez.nombre")}
              puesto={t("staff.DamianJuarez.puesto")}
              linkedin={t("staff.DamianJuarez.linkedin")}
            />
            <CardStaff
              img={GonzaloDiaz}
              empleado
              nombre={t("staff.GonzaloDiaz.nombre")}
              puesto={t("staff.GonzaloDiaz.puesto")}
              linkedin={t("staff.GonzaloDiaz.linkedin")}
            />
            <CardStaff
              img={EvelynVallejos}
              empleado
              nombre={t("staff.EvelynVallejos.nombre")}
              puesto={t("staff.EvelynVallejos.puesto")}
              linkedin={t("staff.EvelynVallejos.linkedin")}
            />
            <CardStaff
              img={EnzoPotes}
              empleado
              nombre={t("staff.EnzoPotesPouyanne.nombre")}
              puesto={t("staff.EnzoPotesPouyanne.puesto")}
              linkedin={t("staff.EnzoPotesPouyanne.linkedin")}
            />
            <CardStaff
              img={JoaquinVilaplana}
              empleado
              nombre={t("staff.JoaquinVilaplana.nombre")}
              puesto={t("staff.JoaquinVilaplana.puesto")}
              linkedin={t("staff.JoaquinVilaplana.linkedin")}
            />
            <CardStaff
              img={ArianaLopez}
              empleado
              nombre={t("staff.ArianaLopezPasquare.nombre")}
              puesto={t("staff.ArianaLopezPasquare.puesto")}
              linkedin={t("staff.ArianaLopezPasquare.linkedin")}
            />
            <CardStaff
              img={EugeniaSilvestre}
              empleado
              nombre={t("staff.EugeniaSilvestre.nombre")}
              puesto={t("staff.EugeniaSilvestre.puesto")}
              linkedin={t("staff.EugeniaSilvestre.linkedin")}
            />
            <CardStaff
              img={FaustoMendoza}
              empleado
              nombre={t("staff.FaustoMendozaJoy.nombre")}
              puesto={t("staff.FaustoMendozaJoy.puesto")}
              linkedin={t("staff.FaustoMendozaJoy.linkedin")}
            />
            <CardStaff
              img={FlorenciaTaranto}
              empleado
              nombre={t("staff.FlorenciaTaranto.nombre")}
              puesto={t("staff.FlorenciaTaranto.puesto")}
              linkedin={t("staff.FlorenciaTaranto.linkedin")}
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Staff;
