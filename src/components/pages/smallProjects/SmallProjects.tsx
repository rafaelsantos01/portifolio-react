import Container from "@/components/container/container";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegShareFromSquare } from "react-icons/fa6";

export default function SmallProjects() {
  return (
    <Container>
      <section className="flex justify-center mt-[70px] pb-[120px]">
        <div className="w-[1300px] xl:px-[180px] lg:px-[100px] mmd:px-[70px] base:px-[30px] flex flex-col gap-[30px]">
          <div>
            <div className="max-w-28 space-y-4">
              <div className="flex justify-between">
                <div className="text-red-600">
                  <GoProjectRoadmap size={24} />
                </div>
                <div className="hover:text-red-600">
                  <FaRegShareFromSquare size={24} />
                </div>
              </div>

              <div className="flex items-center gap-[20px]">
                <h2 className="text-[30px] text-white-100 whitespace-nowrap">
                  Titulo
                </h2>
              </div>

              <div className="flex columns-3 flex-wrap gap-[20px] mt-[50px]">
                <p>a</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
