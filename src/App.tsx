import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Index";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";

export function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Footer />
    </>
  );
}

export default App
