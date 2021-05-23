import { React, useContext } from "react";
import { Context } from "../other/Context";

import language from "../data/language.json";

const Footer = () => {
  const { lang } = useContext(Context);

  return (
    <div
      className="items-center justify-center w-full h-full py-5 text-center bg-gray-300"
      id="footer"
    >
      <div className="text-gray-700">
        © Hugo 2021 {language.copyright[lang]} <br />
        {language.notAffiliated[lang]}
      </div>
    </div>
  );
};

export default Footer;
