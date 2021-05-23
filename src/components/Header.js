import React, { useContext } from "react";
import { Context } from "../other/Context";
import logo_name from "../logo-name.png";

import language from "../data/language.json";

const Header = () => {
  const { lang, setLang } = useContext(Context);

  return (
    <header>
      <div className="md:py-5 py-[54px] fixed top-0 z-10 inline-flex justify-center w-full h-auto px-3 mb-24 overflow-hidden text-center bg-gray-900">
        <a href="https://www.hugoyt.me/">
          <img
            src={logo_name}
            alt=""
            className="sm:left-12 sm:top-5 left-2 top-7 sm:h-16 absolute w-auto h-12 m-auto mb-3 text-center"
          />
        </a>

        <label
          for="menu-toggle"
          className="md:hidden top-8 right-10 absolute inline-flex text-right cursor-pointer"
        >
          <svg
            height="80"
            width="80"
            className="w-[35px] h-[35px] text-white fill-current"
          >
            <path d="M4 10h24a2 2 0 000-4H4a2 2 0 000 4zm24 4H4a2 2 0 000 4h24a2 2 0 000-4zm0 8H4a2 2 0 000 4h24a2 2 0 000-4z" />
          </svg>
        </label>

        <select
          name="language"
          id="language-selector"
          className="md:top-10 md:right-10 top-8 right-24 hover:bg-red-700 hover:scale-[1.02] ease-in-out duration-150 transform hover:text-white px-auto absolute w-32 h-8 px-6 font-medium text-right text-gray-200 bg-red-600 cursor-pointer"
          onChange={(ls) => {
            setLang(ls.target.value);
          }}
        >
          <option value="en" className="font-medium text-black bg-gray-100">
            English
          </option>
          <option value="es" className="font-medium text-black bg-gray-100">
            Español
          </option>
        </select>

        <input className="hidden" type="checkbox" id="menu-toggle" />

        <ul
          id="menu"
          className="md:inline-flex md:flex-initial justify-center hidden gap-5 py-5 mt-auto mb-auto text-xl font-semibold text-center text-white align-middle"
        >
          <li>
            <a className="hover:text-yellow-200" href="#">
              {language.navbar.main[lang]}
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-200" href="#youtube">
              YouTube
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-200" href="#experiencia">
              {language.navbar.experience[lang]}
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-200" href="#contacto">
              {language.navbar.contact[lang]}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

function ChangeLanguage() {
  const { lang, setLang } = useContext(Context);
  var selectBox = document.getElementById("language-selector");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;

  setLang(selectedValue);
  alert(selectedValue);
}

export default Header;
