import Menu from "@/components/menu/menu";
import Identifier from "@/components/pages/start/identifier";
import Contact from "@/components/pages/contact/contact";
import About from "@/components/pages/about/about";
import Skills from "@/components/pages/skills/skills";
import MyProjects from "@/components/pages/projects/myProjexts";

export default function Start() {
  return (
    <div>
      <div>
        <Menu>
          <Identifier />
          <Skills />
          <About />
          <MyProjects />
          <Contact />
        </Menu>
      </div>
    </div>
  );
}
