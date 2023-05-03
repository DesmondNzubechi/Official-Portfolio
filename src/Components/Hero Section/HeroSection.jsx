import React from "react";
import HeroImg from '../../assets/nzube.png';
import {AiFillTwitterSquare, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
export const HeroSection = () => {
    return(
        <div className="bg-Tp px-[30px] pt-[100px] py-[50px] ">
        <div className="flex gap-5 items-center justify-around flex-col md:flex-row">
       <div className="max-w-[500px] flex flex-col gap-2 ">
        <h1 className="uppercase font-myfont text-[35px] md:text-[40px] text-slate-50  ">Desmond Nzubechukwu</h1>
        <p className="text-slate-50 text-[18px] md:text-[20px] capitalize ">I am a passionate <strong>frontend web developer</strong> . I convert Ideas into standard and scalable web application with a great user experience. </p>
        <div className="flex flex-row gap-2 my-[10px] ">
            <AiFillLinkedin className="text-[50px] text-[35px] text-slate-200 shadow-xl rounded-xl "/>
            <AiFillTwitterSquare className="text-[50px] text-[35px] shadow-xl text-slate-200 "/>
            <AiFillGithub className="text-[50px] text-[35px] shadow-xl text-slate-200 "/>
        </div>
       </div>
       <div className="max-w-[500px] ">
        <img src={HeroImg} alt="Nzubechukwu" className="rounded" srcset="" />
       </div>
        </div>
        </div>
    )
}