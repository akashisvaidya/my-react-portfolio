import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { ContactForm } from "./components/ContactForm";
// import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Layout } from "./components/Layout";
import { Navigation } from "./components/Navbar";

import { Project } from "./components/Project";
// import { Skills } from "./components/Skills";
import { TopNav } from "./components/TopNav";
import { PortfolioTabs } from "./components/projectTabs";

function App() {
  return (
    <Layout>
      <div class="wrapper">
        {/* <!-- navbar --> */}
        <TopNav />
        {/* <Navigation /> */}
        {/* <!-- hero section --> */}
        <Hero />

        {/* <!-- skills --> */}
        {/* <Skills /> */}

        {/* <!-- projects --> */}
        {/* <Project /> */}
        <PortfolioTabs />

        {/* <!-- about me --> */}
        <AboutMe />

        {/* <!-- contact me --> */}
        {/* <Contact /> */}
        <ContactForm />
        {/* <!-- footer --> */}
      </div>
    </Layout>
  );
}

export default App;
