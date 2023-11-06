import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Menu from "@/components/menu/menu";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import Identifier from "@/components/start/identifier";
import { useEffect, useState } from "react"
import {db} from "../../utils/firebase"
import { collection, getDocs, query } from "firebase/firestore";

interface IProjects{
  title:string,
  description:string,
  urlImage:string,
  linkGit:string,
  linkLive:string,
}


export default  function Start() {
  const [projects, setProjects] = useState<IProjects[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "projetos"));

      const querySnapshot = await getDocs(q);
      const newProjects: IProjects[] = [];
      querySnapshot.forEach((doc) => {
        const projectData = doc.data() as IProjects;
        newProjects.push(projectData); 
      });

      setProjects(newProjects); 
    };

    fetchData();
  }, []);

  return (
    <div>
      <div >
        <Menu>
          <Identifier />
          <About/>
          <Projects projects={projects}/>
          <Skills />
          <Contact />
        </Menu>
      </div>
    </div>
  );
}
