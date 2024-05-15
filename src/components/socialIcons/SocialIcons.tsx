import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";

const SocialIcons = () => {
  return (
    <div className="fixed bottom-2 left-4 hidden md:block">
      <div className="space-y-4">
        <div className="flex items-center justify-center">
          <a
            href="http://github.com/rafaelsantos01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubLine size={28} />
          </a>
        </div>

        <div className="flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/rafael-santos-7a938b237/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={28} />
          </a>
        </div>

        <div className="flex items-center justify-center">
          <a
            href="https://wa.me/55047996581330"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiWhatsappLine size={28} />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center mt-2">
        <div className="border-l-2 border-white h-28"></div>
      </div>
    </div>
  );
};

export default SocialIcons;
