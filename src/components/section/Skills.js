import { React, useContext } from "react";
import { Context } from "../../other/Context";

import language from "../../data/language.json";

const Skills = () => {
  const { lang } = useContext(Context);

  return (
    <div className="inline-flex justify-center w-full h-full p-10 m-auto mt-0 text-center bg-gray-800">
      <div>
        <div className="text-center">
          <span
            id="experiencia"
            className="bg-gradient-to-r bg-clip-text from-blue-400 to-purple-400 sm:text-6xl md:text-7xl w-auto text-5xl font-bold text-transparent"
          >
            {language.title.experience[lang]}
          </span>
          <div className="description">
            {language.text.experience.description[lang]}
          </div>
        </div>

        <div className="lg:grid-cols-3 lg:gap-8 xl:w-5/6 grid w-full grid-cols-1 gap-6 m-auto">
          <Skill
            name="Java"
            background="from-purple-500 to-indigo-500"
            description={language.text.experience.java[lang]}
          />
          <Skill
            name="CSS + React"
            background="from-pink-600 to-rose-600"
            description={language.text.experience.cssReact[lang]}
          />
          <Skill
            name="MySQL"
            background="from-yellow-600 to-orange-600"
            description={language.text.experience.mysql[lang]}
          />
        </div>
      </div>
    </div>
  );
};

function Skill(props) {
  return (
    <div
      className={
        "relative rounded-3xl p-5 bg-gradient-to-br " +
        props.background +
        " border-solid border-2 border-yellow-300 border-opacity-20" +
        " ease-in-out duration-300" +
        " hover:border-opacity-100 xl:max-w-md max-w-full text-left"
      }
    >
      <h2 class="text-xl font-bold mb-3 uppercase text-gray-50 tracking-wide">
        {props.name}
      </h2>
      <hr />
      <p class=" mt-5 font-medium text-gray-200 text-lg mb-4">
        {props.description}
      </p>
    </div>
  );
}

export default Skills;
