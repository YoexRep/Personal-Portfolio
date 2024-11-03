
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

i18next.init({
  iterpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: { global: global_es },
    en: { global: global_en },
  },
});

function App() {
  return (
    <div className="App">

<I18nextProvider i18n={i18next}>
      <NavBar />
      <Banner />
  
      <Projects />
      <Contact />
      <Footer />

      </I18nextProvider>
    </div>
  );
}

export default App;
