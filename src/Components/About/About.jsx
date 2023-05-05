import React from "react";
import HeroImg from '../../assets/nzubeb2r.png';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";








export const About = () => {

    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);

    return(
        <div className="px-[30px] pb-[50px] bg-gradient-to-b from-Tp to-blue-900 pt-[100px] min-h-[100vh] ">
<div className="flex flex-col md:flex-row justify-around items-center gap-5">
<div data-aos='fade-up' data-aos-duration='1000' className=" bg-gradient-to-b from-slate-50 to-slate-500  relative rounded ">
        <img src={HeroImg} alt="Nzubechukwu" className="rounded" srcset="" />
       </div>
  <div data-aos='fade-up' data-aos-duration='1000' className="">
    <h1 className="text-slate-50 md:text-[30px] text-[25px]  font-myfont">About Me</h1>
    <div className="text-slate-300 font-fonty max-w-[700px] flex flex-col gap-2 ">
    <p className="md:text-[17px] text-[15px] ">Hi, my name is <strong className="uppercase text-slate-50">Desmond Nzubechukwu Abugu</strong> , and I am a frontend web developer with expertise in HTML, CSS, JavaScript, ReactJS, and TailwindCSS. With a year of experience in the industry, I have had the opportunity to work on a couple of projects, both simple websites and complex web applications.</p>
  {/*<p className="md:text-[17px] text-[15px] "> I have honed my skills in HTML, CSS, and JavaScript, and have become proficient in using ReactJS to build responsive and user-friendly web applications. More recently, I have added TailwindCSS to my skillset, which has allowed me to rapidly build beautiful and consistent UI components.</p>*/}
  <p className="md:text-[17px] text-[15px] ">As a frontend developer, my goal is to create visually stunning and intuitive websites and applications that are both aesthetically pleasing and highly functional. I am passionate about creating seamless user experiences and strive to ensure that all of my products are accessible to all users, regardless of their technical abilities.</p>
  <p className="md:text-[17px] text-[15px] ">In my career journey I have had the opportunity to collaborate with cross-functional teams, including designers, backend developers, and project managers, to deliver high-quality products on time and within budget. I am a strong communicator and collaborator, and enjoy working in fast-paced and dynamic environments.</p>
  <p className="md:text-[17px] text-[15px] ">When I'm not coding, you can find me exploring the latest frontend development trends and technologies, attending meetup, and experimenting with new projects. I am constantly seeking out opportunities to learn and grow as a developer and am excited about the future of web development and the endless possibilities it holds.</p>
 {// <p className="md:text-[17px] text-[15px] ">Overall, I am a dedicated and experienced frontend web developer with a passion for creating user-friendly and visually stunning web applications. My expertise in HTML, CSS, JavaScript, ReactJS, and TailwindCSS allows me to bring complex ideas to life with efficiency and precision.</p>
  }</div>
  </div>
</div>
        </div>
    )
}