import React from "react";
import {AiFillTwitterSquare, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {MdOutgoingMail} from 'react-icons/md';
import {IoLogoWhatsapp} from 'react-icons/io';





export const ContactLink = () => {
    return(
        <div className="flex flex-col fixed  px-[5px] items-center right-0 z-[15] bottom-0  gap-2  ">
        <a href="https://linkedin.com/in/desmond-nzubechukwu-388954222/"> <AiFillLinkedin className=" md:text-[30px] text-[20px] text-slate-200 shadow-xl rounded-xl "/></a>
         <a href="https://twitter.com/Nzubechukwu101"> <AiFillTwitterSquare className=" md:text-[30px] text-[20px] shadow-xl text-slate-200 "/></a>
       <a href="https://github.com/DesmondNzubechi"> <AiFillGithub className=" md:text-[30px] text-[20px] shadow-xl text-slate-200 "/></a>  
         <a href="mailto:nzubestdesmond@gmail.com"><MdOutgoingMail  className=" md:text-[30px] text-[20px] shadow-xl text-slate-200 "/></a>
         <a href="https://wa.me/2347084183611?text=Hello%20Nzubechukwu,%20I%20got%20your%20contact%20from%20your%20website%20my%20name%20is%20..."><IoLogoWhatsapp className=" md:text-[30px] text-[20px] shadow-xl text-slate-200 " /></a> 
          <span className="bg-slate-300 h-[88px] w-[2px] "></span>
      </div>
    )
}