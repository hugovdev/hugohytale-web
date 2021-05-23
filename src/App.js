import "./App.css";

import Skills from "./components/section/Skills";
import Welcome from "./components/section/Welcome";
import YouTube from "./components/section/YouTube";
import Contacto from "./components/section/Contacto";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { DataProvider } from "./other/Context";

function App() {
  return (
    <DataProvider>
      <Header />
      <Welcome />
      <YouTube />
      <Skills />
      <Contacto />
      <Footer />
    </DataProvider>
  );
}

export default App;
