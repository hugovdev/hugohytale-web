import { React, useContext } from "react";
import { Context } from "../../other/Context";

import language from "../../data/language.json";

const YouTube = () => {
  const { lang } = useContext(Context);

  return (
    <div
      className="items-center justify-center w-full h-full pb-10 bg-gray-700"
      id="youtube"
    >
      <div className="xl:w-4/6 lg:w-5/6 py-10 m-auto">
        {/* Imagen centrada entre las dos columnas si está en PC */}
        <img
          src="./hytale-logo.png"
          className="lg:block h-72 hidden m-auto"
          alt=""
        />

        <div className="lg:grid-cols-2 md:grid-cols-1 grid">
          {/* Imagen a la izquierda si está en móvil */}
          <img
            src="./hytale-logo.png"
            className="lg:hidden sm:h-72 block h-40 m-auto"
            alt=""
          />

          <div className="lg:pl-4 sm:pl-20 pl-10 pr-4 text-left">
            <h1>
              <a
                href="https://hytale.com"
                className="bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 text-5xl text-transparent"
              >
                Hytale
              </a>
            </h1>
            <div className="justify-start max-w-xl m-0 mt-3">
              <div className="text-xl font-normal text-left text-white">
                <p>{language.text.hytale.description[lang]}</p>
                <p className="py-4">
                  {language.text.hytale.myObjectives[lang]}
                </p>
                <ul className="featureList pl-12 list-disc">
                  <li>{language.text.hytaleObjectives.server[lang]}</li>
                  <li>{language.text.hytaleObjectives.series[lang]}</li>
                  <li>{language.text.hytaleObjectives.liveEvents[lang]}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:inline hidden m-auto">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KhyKpWYrY4g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="xl:inline hidden"
            />

            <iframe
              width="430"
              height="242"
              src="https://www.youtube.com/embed/KhyKpWYrY4g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="lg:inline xl:hidden m-auto"
            />

            <p className="max-w-xl py-4 text-xl italic text-center text-white">
              {language.text.hytale.videoExplanation[lang]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTube;
