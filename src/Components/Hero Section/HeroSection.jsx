import React from "react";
import HeroImg from '../../assets/nzube.png';
import {AiFillTwitterSquare, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {MdOutgoingMail} from 'react-icons/md';
import {IoLogoWhatsapp} from 'react-icons/io';

export const HeroSection = () => {
    return(
        <div className="bg-Tp px-[30px] min-h-[100vh] pt-[100px] py-[50px] ">
        <div className="flex gap-5 items-center justify-around flex-col md:flex-row">
       <div className="max-w-[500px] flex flex-col gap-2 ">
        <h1 className="uppercase font-myfont text-[35px] md:text-[40px] text-slate-50  ">Desmond Nzubechukwu</h1>
        <p className="text-slate-50 text-[18px] md:text-[20px] capitalize ">I am a passionate <strong>frontend web developer</strong> .I create beautiful, intuitive, and user-friendly websites that not only meet the needs of my clients but also exceed the expectations of their users. </p>
        <div className="flex flex-row gap-3">
            <a href="http://" className=" bg-slate-400 text-slate-900 p-1 text-[20px] rounded font-fonty  ">Contact Me</a> 
            <a href="" className="  text-slate-50 p-1 border text-[20px] rounded font-fonty  ">Resume</a>
        </div>
        <div className="flex flex-col fixed  px-[5px] items-center left-0 z-[15] bottom-0  gap-2  ">
            <AiFillLinkedin className=" md:text-[30px] text-[20px] text-slate-200 shadow-xl rounded-xl "/>
            <AiFillTwitterSquare className=" md:text-[30px] text-[20px] shadow-xl text-slate-200 "/>
            <AiFillGithub className=" md:text-[30px] text-[20px] shadow-xl text-slate-200 "/>
            <MdOutgoingMail  className=" md:text-[30px] text-[20px] shadow-xl text-slate-200 "/>
            <IoLogoWhatsapp className=" md:text-[30px] text-[20px] shadow-xl text-slate-200 " />
            <span className="bg-slate-300 h-[100px] w-[2px] "></span>
        </div>
       </div>
       <div className="max-w-[500px] ">
        <img src={HeroImg} alt="Nzubechukwu" className="rounded" srcset="" />
       </div>
        </div>
        </div>
    )
}