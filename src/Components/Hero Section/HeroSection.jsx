import React from "react";
import HeroImg from '../../assets/nzubeb2r.png';
import Resume from '../../assets/myResume/Desmond Nzubechukwu Resume.pdf';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";


export const HeroSection = () => {
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);

    return(
        <div  className="bg-gradient-to-b from-Tp to-blue-900 overflow-x-hidden ... px-[30px] min-h-[100vh] pt-[100px] py-[50px] ">
        <div  className="flex gap-5 items-center justify-around  flex-col md:flex-row">
       <div data-aos='fade-up' data-aos-duration='1000' className="max-w-[500px] flex flex-col gap-2 ">
        <h1 className="capitalize font-myfont text-[25px] md:text-[40px] text-slate-50  ">Desmond Nzubechukwu</h1>
        <p className="text-slate-50 max-w-[400px] flex flex-col gap-2 text-[16px]  md:text-[20px] capitalize "><span className="font-bold"> Developing & Bringing ideas to life.</span> <span>I build user-friendly and accessible products that effectively cater to the needs of the target audience. By employing a user-centric approach, I ensure that the end product is intuitive, easy to navigate, and provides a seamless experience.</span></p>
        <div className="flex flex-row gap-3">
            <Link to='/Contact' className=" ease-in delay-150 hover:-translate-y-1 hover:scale-110 bg-slate-400 text-slate-900 p-1 text-[20px] rounded font-fonty  ">Contact Me</Link> 
            <Link to='/project'  className=" ease-in delay-150 hover:-translate-y-1 hover:scale-110 text-slate-50 p-1 border text-[20px] rounded font-fonty  ">My Projects</Link>
        </div>
       </div>
       <div data-aos='fade-up' data-aos-duration='1000' className="max-w-[500px] transition ease-in delay-100 hover:-translate-y-1 hover:scale-110 bg-gradient-to-b  from-slate-50 to-slate-500  relative rounded-full ">
        <img src={HeroImg} alt="Nzubechukwu" className="rounded-[50%] transition ease-in delay-300 hover:-translate-y-1 hover:scale-110" srcset="" />
       </div>
        </div>
        </div>
    )
}