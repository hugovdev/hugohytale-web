import React, { useContext } from "react";
import logo from "../../logo.png";
import language from "../../data/language.json";
import { Context } from "../../other/Context";

const Welcome = () => {
  const { lang } = useContext(Context);

  return (
    <div className="items-center justify-center w-full h-full pb-10 bg-gray-800">
      <div className="w-5/6 m-auto">
        <div className="lg:grid-cols-2 md:grid-cols-1 grid">
          <div className="text-center">
            <img
              src={logo}
              className="sm:h-96 h-72 mt-40 ml-auto mr-auto"
              alt="logo"
            />

            <span className="bg-gradient-to-r bg-clip-text from-red-600 to-rose-800 sm:text-7xl w-auto text-6xl font-bold text-transparent">
              {language.title.welcome[lang]}
            </span>
            <div className="description max-w-xl m-auto text-center">
              {language.text.welcome[lang]}
            </div>
          </div>

          {/*
          Video wrapper (second col in lg screens)
          */}
          <div className="lg:inline lg:mt-40 hidden ml-auto mr-auto">
            <VideoRate />
          </div>
        </div>

        <div className="mt-14 inline-flex content-center justify-center w-full m-auto text-center">
          <a
            href="https://www.twitter.com/HugoHytale"
            className="flex text-center"
          >
            <svg className="btn" viewBox="0 0 512 512">
              <path d="M512 97.25a218.84 218.84 0 01-60.48 16.57c21.76-12.99 38.37-33.4 46.18-58.01a209.77 209.77 0 01-66.56 25.4A105.18 105.18 0 00354.46 48c-58.1 0-104.9 47.17-104.9 105 0 8.31.71 16.31 2.44 23.93-87.26-4.26-164.48-46.08-216.35-109.8a105.68 105.68 0 00-14.37 53.06c0 36.35 18.72 68.58 46.62 87.23-16.86-.32-33.4-5.21-47.42-12.92v1.15c0 51 36.38 93.37 84.1 103.13a104.76 104.76 0 01-27.52 3.46c-6.72 0-13.5-.38-19.88-1.8 13.6 41.58 52.2 72.14 98.08 73.13a210.9 210.9 0 01-130.14 44.77c-8.6 0-16.86-.39-25.12-1.44C46.5 446.88 101.6 464 161.02 464c193.16 0 298.76-160 298.76-298.69 0-4.64-.16-9.12-.39-13.57 20.83-14.78 38.34-33.24 52.61-54.5z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UClv4gueyMGyxd2WAFiboLow"
            className="flex text-center"
          >
            <svg className="btn" viewBox="0 0 512 512">
              <path d="M490.24 113.92c-13.89-24.7-28.96-29.25-59.65-30.98C399.94 80.86 322.85 80 256.06 80c-66.9 0-144.03.86-174.65 2.91-30.63 1.76-45.73 6.27-59.75 31.01C7.36 138.59 0 181.09 0 255.9v.26c0 74.5 7.36 117.31 21.66 141.73 14.02 24.7 29.1 29.18 59.72 31.26 30.65 1.8 107.77 2.85 174.68 2.85 66.79 0 143.88-1.06 174.56-2.82 30.7-2.08 45.76-6.56 59.65-31.26C504.7 373.5 512 330.69 512 256.19v-.16-.1c0-74.84-7.3-117.34-21.76-142.01zM192 352V160l160 96-160 96z" />
            </svg>
          </a>

          <a href="https://discord.gg/Uwm94ym" className="flex text-center">
            <svg
              className="btn"
              height="64"
              width="64"
              viewBox="-26.25 -50 227.5 300"
            >
              <path d="M69.4 83.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zm36.5 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" />
              <path d="M154.5 0h-134C9.2 0 0 9.2 0 20.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V20.6C175 9.2 165.8 0 154.5 0zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2a81.52 81.52 0 0150.3 9.4s-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

function VideoRate() {
  const setPlayBack = () => {
    document.getElementById("process-video").playbackRate = 5.0;
  };
  return (
    <>
      <video
        id="process-video"
        height="540"
        width="540"
        autoplay="true"
        loop="true"
        muted="true"
        className="rounded-3xl"
        onCanPlay={() => setPlayBack()}
      >
        <source src="./process.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default Welcome;
