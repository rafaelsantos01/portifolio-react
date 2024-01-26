import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import React from "react";
import Technologies from "../skills/technologies";
import Image from "next/image";

interface IRequest {
  title?: string;
  text?: string;
  srcImg?: any;
  itemsPosition?: string;
  flexReverse?: string;
  link?: string;
  skill: {
    id: string;
    skill: string;
    img: string;
  }[];
}

export default function Project({
  title,
  text,
  srcImg,
  itemsPosition,
  flexReverse,
  link,
  skill,
}: IRequest) {
  return (
    <div
      className={`text-center flex flex-col lg:flex-row gap-5 xl:gap-0 items-center mb-[1.875rem] lg:text-start md:items-start lg:mb-28 xl:mb-32 ${flexReverse}`}
    >
      <div className="lg:w-[70%] flex flex-col gap-6">
        <h1 className="text-base font-semibold md:text-3xl">{title}</h1>
        <div className="space-y-4">
          <p
            className={`max-w-[600px] 2xl:max-w-[800px] text-[#D4D4D4] text-xs md:text-lg xl:text-xl text-${itemsPosition}`}
          >
            {text}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start">
            {skill.map(({ id, skill, img }) => (
              <Technologies key={id} srcImg={img} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      <a
        className={`my-14 lg:my-0  mx-auto lg:mx-0 ${
          flexReverse == "lg:flex-row-reverse" ? "lg:mr-12" : "lg:ml-12"
        }`}
        target="_blank"
        href={`${link}`}
      >
        <div className="block hover:scale-110 transition-all duration-500 cursor-pointer w-[350px]">
          <Image
            alt="Project"
            src={srcImg}
            priority
            className="rounded-3xl max-h-64"
          />
        </div>
      </a>
    </div>
  );
}

// export default function Projects({ projects }: IProjectsProps) {
//   const itemsPerPageMobile = 1;
//   const itemsPerPageDesktop = 3;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageDesktop);

//   useEffect(() => {

//     if (typeof window !== 'undefined') {
//       const screenWidth = window.innerWidth;
//       setItemsPerPage(screenWidth < 768 ? itemsPerPageMobile : itemsPerPageDesktop);
//     }
//   }, [itemsPerPageMobile, itemsPerPageDesktop]);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentProjects = projects.slice(startIndex, endIndex);

//   const totalPages = Math.ceil(projects.length / itemsPerPage);

//   const handlePageChange = (newPage:number) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <Container>
//       <div id="projects">
//         <div className="flex justify-center items-center">
//           <Title title="Latest Projects" />
//         </div>
//         <div className="space-x-3 mt-10 md:flex items-center justify-center">
//           {currentProjects.map((data, index) => (
//             <ProjectCard key={index} data={data} />
//           ))}
//         </div>
//         {totalPages > 1 && (
//           <div className="flex justify-center mt-4">
//             {[...Array(totalPages).keys()].map((page) => (
//               <button
//                 key={page + 1}
//                 onClick={() => handlePageChange(page + 1)}
//                 className={`mx-2 p-2 rounded ${
//                   currentPage === page + 1 ? 'bg-red-600 text-white border border-red-600' : 'bg-black0 border border-red-600'
//                 }`}
//               >
//                 {page + 1}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </Container>
//   );
// }
