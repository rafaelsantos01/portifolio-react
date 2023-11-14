
import Container from "@/components/container/container";
import ProjectCard from "@/components/projectCard/projectCard";
import Title from "@/components/title/title";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


interface IProjects {
  title: string;
  description: string;
  urlImage: string;
  linkGit: string;
}

interface IProjectsProps {
  projects: IProjects[];
}

export default function Projects({ projects }: IProjectsProps) {
  const itemsPerPageMobile = 1; 
  const itemsPerPageDesktop = 3; 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageDesktop);

  useEffect(() => {

    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      setItemsPerPage(screenWidth < 768 ? itemsPerPageMobile : itemsPerPageDesktop);
    }
  }, [itemsPerPageMobile, itemsPerPageDesktop]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePageChange = (newPage:number) => {
    setCurrentPage(newPage);
  };

  return (
    <Container>
      <div id="projects">
        <div className="flex justify-center items-center">
          <Title title="Latest Projects" />
        </div>
        <div className="space-x-3 mt-10 md:flex items-center justify-center">
          {currentProjects.map((data, index) => (
            <ProjectCard key={index} data={data} />
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center mt-4">
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page + 1}
                onClick={() => handlePageChange(page + 1)}
                className={`mx-2 p-2 rounded ${
                  currentPage === page + 1 ? 'bg-red-600 text-white border border-red-600' : 'bg-black0 border border-red-600' 
                }`}
              >
                {page + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}