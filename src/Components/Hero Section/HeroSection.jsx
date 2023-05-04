import React from "react";
import HeroImg from '../../assets/nzubeb2r.png';
import {AiFillTwitterSquare, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {MdOutgoingMail} from 'react-icons/md';
import {IoLogoWhatsapp} from 'react-icons/io';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


export const HeroSection = () => {
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);

    return(
        <div data-aos='fade-up' data-aos-duration='1000' className="bg-Tp overflow-x-hidden ... px-[30px] min-h-[100vh] pt-[100px] py-[50px] ">
        <div className="flex gap-5 items-center justify-around overflow-x-hidden flex-col md:flex-row">
       <div className="max-w-[500px] flex flex-col gap-2 ">
        <h1 className="uppercase font-myfont text-[35px] md:text-[40px] text-slate-50  ">Desmond Nzubechukwu</h1>
        <p className="text-slate-50 text-[18px] md:text-[20px] capitalize ">I am a passionate <strong>frontend web developer</strong> .I create beautiful, intuitive, and user-friendly websites that not only meet the needs of my clients but also exceed the expectations of their users. </p>
        <div className="flex flex-row gap-3">
            <a href="http://" className=" bg-slate-400 text-slate-900 p-1 text-[20px] rounded font-fonty  ">Contact Me</a> 
            <a href="" className="  text-slate-50 p-1 border text-[20px] rounded font-fonty  ">Resume</a>
        </div>
        <div className="flex flex-col fixed  px-[5px] items-center left-0 z-[15] bottom-0  gap-2  ">
          <a href="https://linkedin.com/in/desmond-nzubechukwu-388954222/"> <AiFillLinkedin className=" md:text-[30px] text-[20px] text-slate-200 shadow-xl rounded-xl "/></a>
           <a href="https://twitter.com/Nzubechukwu101"> <AiFillTwitterSquare className=" md:text-[30px] text-[20px] shadow-xl text-slate-200 "/></a>
         <a href="https://github.com/DesmondNzubechi"> <AiFillGithub className=" md:text-[30px] text-[20px] shadow-xl text-slate-200 "/></a>  
           <a href="mailto:nzubestdesmond@gmail.com"><MdOutgoingMail  className=" md:text-[30px] text-[20px] shadow-xl text-slate-200 "/></a>
           <a href="https://wa.me/2347084183611?text=Hello%20Nzubechukwu,%20I%20got%20your%20contact%20from%20your%20website%20my%20name%20is%20..."><IoLogoWhatsapp className=" md:text-[30px] text-[20px] shadow-xl text-slate-200 " /></a> 
            <span className="bg-slate-300 h-[88px] w-[2px] "></span>
        </div>
       </div>
       <div className="max-w-[500px] bg-gradient-to-b from-slate-50 to-slate-500  relative rounded-full ">
        <img src={HeroImg} alt="Nzubechukwu" className="rounded-[50%]" srcset="" />
       </div>
        </div>
        </div>
    )
}