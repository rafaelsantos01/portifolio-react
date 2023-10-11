import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Menu from "@/components/menu/menu";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import Identifier from "@/components/start/identifier";

export default function Start() {
  return (
    <div>
      <div className="">
        <Menu>
          <Identifier />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </Menu>
      </div>
    </div>
  );
}
