import contact from "../../contact.svg";

import { React, useContext } from "react";
import { Context } from "../../other/Context";

import language from "../../data/language.json";

const Contacto = () => {
  const { lang } = useContext(Context);

  return (
    <div
      className="items-center justify-start w-full h-full py-10 text-center bg-gray-700"
      id="contacto"
    >
      <span className="bg-gradient-to-r bg-clip-text from-green-500 to-green-300 sm:text-6xl md:text-7xl w-auto text-5xl font-bold text-transparent">
        {language.title.contact[lang]}
      </span>
      <img
        src={contact}
        className="py-10 m-auto"
        width="500px"
        height="500px"
      />

      <p className="text-xl font-normal text-white">
        {language.text.contact.description[lang]} <br />
        <a
          href="mailto:hugocmbusiness@gmail.com"
          className="hover:underline text-yellow-400 no-underline"
        >
          {language.text.contact.email[lang]}
        </a>
        .
        <br />
        <a
          href="https://twitter.com/hugohytale"
          className="hover:underline text-yellow-400 no-underline"
        >
          {language.text.contact.twitter[lang]}
        </a>
        .
        <br />
      </p>
    </div>
  );
};

export default Contacto;
