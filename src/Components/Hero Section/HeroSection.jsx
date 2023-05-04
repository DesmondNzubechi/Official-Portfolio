import React from "react";
import HeroImg from '../../assets/nzubeb2r.png';
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
       </div>
       <div className="max-w-[500px] bg-gradient-to-b from-slate-50 to-slate-500  relative rounded-full ">
        <img src={HeroImg} alt="Nzubechukwu" className="rounded-[50%]" srcset="" />
       </div>
        </div>
        </div>
    )
}