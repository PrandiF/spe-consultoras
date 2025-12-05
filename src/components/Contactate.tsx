import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";

type ContactateProps = { id?: string };

function Contactate({ id }: ContactateProps) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col gap-6 items-center justify-center mx-auto py-10 mt-15 px-8 md:mt-20"
      id={id}
    >
      <div
        className="flex md:flex-row flex-col gap-2 text-center justify-center"
        data-aos="fade"
        data-aos-duration="1000"
      >
        <p className="font-bold text-4xl md:text-5xl text-[#1A56D0]">
          {t("contactate.titulo")}
        </p>
        <p className="font-bold text-4xl md:text-5xl text-[#FF7C28]">
          {t("contactate.titulo2")}
        </p>
      </div>

      <div className="md:w-[80%] w-full">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contactate;
