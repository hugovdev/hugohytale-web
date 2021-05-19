import logo from "./logo.png";
import logo_name from "./logo-name.png";
import "./App.css";
import contact from "./contact.svg";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <YouTube />
      <Skills />
      <Contacto />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="md:py-5 fixed top-0 z-10 inline-flex justify-center w-full h-auto px-3 py-16 mb-24 overflow-hidden text-center bg-gray-900">
        <img
          src={logo_name}
          alt=""
          className="left-12 top-5 absolute w-auto h-16 m-auto mb-3 text-center"
        />

        <label
          for="menu-toggle"
          className="md:hidden top-8 absolute right-0 inline-flex text-right cursor-pointer"
        >
          <svg
            height="20"
            width="20"
            className="w-5 h-5 text-white fill-current"
          >
            <path d="M4 10h24a2 2 0 000-4H4a2 2 0 000 4zm24 4H4a2 2 0 000 4h24a2 2 0 000-4zm0 8H4a2 2 0 000 4h24a2 2 0 000-4z" />
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <ul
          id="menu"
          className="md:inline-flex md:flex-initial justify-center hidden gap-5 py-5 mt-auto mb-auto text-xl font-semibold text-center text-white align-middle"
        >
          <li>
            <a className="hover:text-yellow-200" href="#">
              Principal
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-200" href="#youtube">
              YouTube
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-200" href="#experiencia">
              Experiencia
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-200" href="#contacto">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden px-4">
        <div className="max-w-3xl p-16 mx-auto my-16 bg-white rounded-lg">
          <h1 className="mb-2 text-2xl font-medium">Dropdown</h1>
          <h2 className="mb-4 text-sm font-medium tracking-wide text-red-500 uppercase">
            Responsive Bar
          </h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          doloremque recusandae veniam laudantium. Quaerat error totam labore,
          alias incidunt minus numquam minima autem quod tenetur laudantium
          optio a provident exercitationem.
        </div>
      </div>
    </header>
  );
}

function Main() {
  return (
    <div className="items-center justify-center w-full h-full pb-10 bg-red-900">
      <div className="w-5/6 m-auto">
        <div className="lg:grid-cols-2 md:grid-cols-1 grid">
          <div className="text-center">
            <img src={logo} className="h-96 mt-40 ml-auto mr-auto" alt="logo" />
            <h1>¡Hola, soy Hugo!</h1>
            <div className="description max-w-xl m-auto text-center">
              Me llamo Hugo. Soy un estudiante de informática y YouTuber en mis
              tiempos libres. Abajo tienes más información sobre cada uno de los
              apartados de arriba.
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
}

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

function YouTube() {
  return (
    <div
      className="items-center justify-center w-full h-full pb-10 bg-red-800"
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
            className="lg:hidden sm:h-72 block h-48 m-auto"
            alt=""
          />

          <div className="lg:pl-4 sm:pl-20 pl-10 pr-4 text-left">
            <h1>Hytale</h1>
            <div className="justify-start max-w-xl m-0 mt-3">
              <div className="text-xl font-normal text-left text-white">
                <p>
                  Mi canal de YouTube está basado en{" "}
                  <a
                    href="https://hytale.com"
                    className="hover:underline text-red-300 no-underline"
                  >
                    Hytale
                  </a>
                  . Este es un vídeojuego creado por Hypixel Studios el cual
                  dispondrá de un modo aventura (solo o cooperativo),
                  herramientas de modding (modelos, texturas, animaciones,
                  bloques, efectos, sonidos, etc.) y servidores.
                </p>
                <p className="py-4">
                  Este juego promete mucho y si termina entregando lo que
                  promete lo cambiará todo, por eso tengo algunos proyectos en
                  mente:
                </p>
                <ul className="featureList pl-12 list-disc">
                  <li>Servidor de Comunidad y Minijuegos</li>
                  <li>Series Variadas (Aventura, Minijuegos, etc.)</li>
                  <li>Eventos Especiales en Directo</li>
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
              Este es un vídeo en el que hablo por qué para mi Hytale es
              diferente a otros juegos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="inline-flex justify-center w-full h-full p-10 m-auto mt-0 text-center bg-red-900">
      <div>
        <div className="text-center">
          <h1 id="experiencia">Experiencia</h1>
          <div className="description">
            Esta es la experiencia que tengo con las tecnologías más relevantes
            actuales.
          </div>
        </div>

        <div className="xl:grid-cols-3 xl:gap-8 lg:w-5/6 grid w-full grid-cols-1 gap-6 m-auto">
          <Skill
            name="Java"
            link="https://www.java.com"
            background="from-purple-500 to-indigo-500"
            description="Mi experiencia con Java se remonta a 2016. Todo empezó gracias a los servidores de Minecraft, yo ayudaba y/o creaba minijuegos y experiencias en ellos. A pesar de mi experiencia sigo aprendiendo cada día."
          />
          <Skill
            name="CSS + React"
            link="https://es.reactjs.org/"
            background="from-pink-500 to-rose-500"
            description="Mi experiencia de CSS sale de un grado superior de desarrollo de aplicaciones web. En cuanto a React todavía estoy investigándolo y aprendiendo día a día, ya que soy bastante nuevo."
          />
          <Skill
            name="MySQL"
            link="https://www.mysql.com/"
            background="from-yellow-400 to-orange-500"
            description="El grado superior que he estudiado (Desarrollo de Aplicaciones Web) me ha abierto los ojos en cuanto a bases de datos. Hemos estudiado a fondo las bases de datos, su funcionamiento, diseño y lenguajes."
          />
        </div>
      </div>
    </div>
  );
}
function Skill(props) {
  return (
    <div
      className={
        "relative rounded-3xl p-5 bg-gradient-to-br " +
        props.background +
        " border-solid border-2 border-yellow-300 border-opacity-20 " +
        " ease-in-out duration-300 " +
        "hover:border-opacity-100 xl:max-w-md max-w-full"
      }
    >
      <h2 class="text-xl font-bold mb-2 text-shadow text-gray-100">
        {props.name}
      </h2>
      <p class="font-normal text-gray-200 text-lg text-shadow mb-4 text-left">
        {props.description}
      </p>
    </div>
  );
}
function Contacto() {
  return (
    <div
      className="items-center justify-start w-full h-full pb-10 text-center bg-red-800"
      id="contacto"
    >
      <h1 className="pt-10 pb-5">¡Contáctame!</h1>

      <img
        src={contact}
        className="py-10 m-auto"
        width="500px"
        height="500px"
      />

      <p className="text-xl font-normal text-white">
        Puedes contactarme por estos medios: <br />
        Mi{" "}
        <a
          href="mailto:hugocmbusiness@gmail.com"
          className="hover:underline text-yellow-400 no-underline"
        >
          correo electrónico
        </a>
        .
        <br />
        Mensaje privado en{" "}
        <a
          href="https://twitter.com/hugohytale"
          className="hover:underline text-yellow-400 no-underline"
        >
          Twitter
        </a>
        .
        <br />
      </p>
    </div>
  );
}
function Footer() {
  return (
    <div
      className="items-center justify-center w-full h-full py-5 text-center bg-gray-300"
      id="footer"
    >
      <div className="text-gray-700">
        © Hugo 2021 Todos los derechos reservados. <br />
        No afiliado con Hytale o Hypixel Studios
      </div>
    </div>
  );
}
export default App;
