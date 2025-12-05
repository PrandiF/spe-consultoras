import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "../../public/logoBlanco.webp";
import bgImg from "../../public/contacbg.webp";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function ContactForm() {
  useEffect(() => {
    emailjs.init("5Ulm7UFUIoE1FtrSf"); // TU PUBLIC KEY
  }, []);
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    comentario: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jla8tfe", // TU SERVICE_ID
        "template_4o7k5zh", // TU TEMPLATE_ID
        {
          nombre: formData.nombre,
          telefono: formData.telefono,
          email: formData.email,
          comentario: formData.comentario,
        }
      )
      .then(() => {
        alert("Mensaje enviado con éxito!");
      })
      .catch((err) => {
        console.error("ERROR EMAILJS:", err);
        alert("Hubo un error al enviar el mensaje.");
      });
  };

  return (
    <div className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden rounded-3xl">
      <Image
        src={bgImg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>

      <form
        onSubmit={sendEmail}
        className="relative w-[90%] md:w-[40%] flex flex-col justify-center items-center mx-auto gap-4 py-10"
      >
        <Image src={logo} alt="logo" className="w-[50%] mb-2" />

        <input
          type="text"
          name="nombre"
          placeholder={t("contacto.form.nombre")}
          onChange={handleChange}
          className="w-full bg-white rounded-xl px-2 py-1 text-[#FF7C28] font-semibold shadow-xl outline-none"
        />

        <input
          type="text"
          name="telefono"
          placeholder={t("contacto.form.telefono")}
          onChange={handleChange}
          className="w-full bg-white rounded-xl px-2 py-1 text-[#FF7C28] font-semibold shadow-xl outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder={t("contacto.form.email")}
          onChange={handleChange}
          className="w-full bg-white rounded-xl px-2 py-1 text-[#FF7C28] font-semibold shadow-xl outline-none"
        />

        <textarea
          name="comentario"
          placeholder={t("contacto.form.comentario")}
          onChange={handleChange}
          className="w-full bg-white rounded-xl px-2 py-1 text-[#FF7C28] font-semibold min-h-40 shadow-xl outline-none"
        />

        <button
          type="submit"
          className="bg-[#FF7C28] cursor-pointer px-5 py-2 rounded-xl text-white font-bold hover:scale-105 transition-all duration-300"
        >
          {t("contacto.form.enviar")}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
