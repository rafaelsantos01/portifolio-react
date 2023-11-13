
import { useEffect, useState } from "react"
import {db} from "../../utils/firebase"
import { collection, getDocs, query } from "firebase/firestore";
import Menu from "@/components/menu/menu";
import Identifier from "@/components/pages/start/identifier";
import Projects from "@/components/pages/projects/projects";
import Contact from "@/components/pages/contact/contact";
import About from "@/components/pages/about/about";
import Skills from "@/components/pages/skills/skills";

interface IProjects{
  title:string,
  description:string,
  urlImage:string,
  linkGit:string,
  linkLive:string,
}

interface ISkills{
  title:string,
  img:string
}

export default  function Start() {
  const [projects, setProjects] = useState<IProjects[]>([]);
  const [skills,setSkills]= useState<ISkills[]>([]);

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


      const a = query(collection(db, "skills"));

      const querySnapshotSkills = await getDocs(a);
      const newSkills: ISkills[] = [];
      querySnapshotSkills.forEach((doc) => {
        const skillsData = doc.data() as ISkills;
        newSkills.push(skillsData); 
      });
      setSkills(newSkills); 

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
          <Skills skills={skills}/>
          <Contact />
        </Menu>
      </div>
    </div>
  );
}
