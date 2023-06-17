import React from "react";
import Myhealth from '../../assets/myhealth.png';
import HomeFeature from '../../assets/Homefeatures.png';
import Fintek from '../../assets/fintech.png';
import shoppy from '../../assets/shoppy.png';
import AirtimeSeller from '../../assets/Airtimeseller.png';
import readerslodge from '../../assets/readerslodge.png';
import eeunizik from '../../assets/ee.png';
import nuesa from '../../assets/nuesau.png';
import b2rex from '../../assets/b2rexhange.png';
import cgpaCalc from '../../assets/gp1.png';
import lorddube from '../../assets/lorddube.png';
import homedecor from '../../assets/Screenshot 2023-05-22 091359.png';
import homebuilder from '../../assets/homebuilder.png';
import {FiExternalLink, FiGithub} from 'react-icons/fi';
import {FaLink} from 'react-icons/fa';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


export const Projects = () => {
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
const projectItems = [
    {
        ProjectImg: homebuilder,
        projectName : 'HOMEBUILDER',
        ProjectDescr : 'This project is a real estate  website that I built with React, Tailwind CSS, and Firebase. I integrated Seamlessly search to explore properties based on location and budget, I integrated authentication using firebase, and  a dynamic admin dashboard for property listing, I also made the property listing available for anyone to test the features. Experience enhanced communication and discover the latest listings, making this project an invaluable addition to any real estate venture.',
        projectStack: 'Stack/Tools used: React,Tailwindcss, firebase, Git,Router',
        ProjectGit : 'github.com/DesmondNzubechi/beautiful-home',
        ProjectUrl : 'buildhome.vercel.app',
    },
    {
        ProjectImg: homedecor,
        projectName : 'HOMEDECOR',
        ProjectDescr : 'Homedecor is a furniture ecommerce website where you can view different kind of furniture for your home and office. You can add items to the cart, you can also add favorite item to your wishlist. products in the cart are stored in the localstorage. You can also search for a specific product across the page. It also has checkout page for payment.',
        projectStack: 'Stack/Tools used: React,Tailwindcss,Git,Router',
        ProjectGit : 'github.com/DesmondNzubechi/Home-decor',
        ProjectUrl : 'home-decor-by-nzubechukwu.vercel.app',
    },
    {
        ProjectImg: lorddube,
        projectName : 'Lorddube lorgistic energy',
        ProjectDescr : 'Lorddube Logistic Energy is website that I built for company located in Porthacourt Nigeria they specialize in selling of quality Oil and Gas tools . This website made it easy for their customer to access them online.',
        projectStack: 'Stack/Tools used: React,Tailwindcss,Git,Router',
        ProjectGit : 'github.com/DesmondNzubechi/LORDDUBE-LORGISTIC-ENERGY.CO',
        ProjectUrl : 'lorddubelogisticenergy.com',
    },
    {
        ProjectImg: nuesa,
        projectName : 'Nuesa unizik',
        ProjectDescr : 'This is a website for faculty of engineering unizik where its students can download reading material and also read article about engineering. I am among the team that built the website. I worked on the frontend where utilized reactjs and tailwindcss.',
        projectStack: 'Stack/Tools used: React, NodeJs, MongoDB, Postman,Tailwindcss,Git,Vercel&Router',
        ProjectUrl : 'client-side-coral.vercel.app/',
        ProjectGit : 'github.com/NUESA-UNIZIK/Client-side',
    },
   /* {
        ProjectImg: eeunizik,
        projectName : 'EE-NAU',
        ProjectDescr : 'I\'m building this E-Library Website for Electrical Engineering students in my school (UNIZIK) where they can download course outlines for each course and also dowload reading resources like handouts, exam past question and textbooks. They can also calculate their CGPA on the website. The website is under production. Tech is all about giving back to the community so I deceided to give back  to the community with the skill that I have. The website link will be available as soon as it\'s ready. ',
        projectStack: 'Stack/Tools used: React,Tailwindcss,Git,Router',
        ProjectGit : 'github.com/DesmondNzubechi/ee-nau',
        ProjectUrl : 'nzubechukwu.com',
    },
    {
        ProjectImg: Myhealth,
        projectName : 'My Health',
        ProjectDescr : 'This is a healthcare website where patients can book treatment online from comfort of their home. It  has great user experience',
        projectStack: 'Stack/Tools used: Html, Css, Javascript',
        ProjectGit : 'github.com/DesmondNzubechi/Health-Care-Website',
        ProjectUrl : 'myhealth-by-nzubechukwu.netlify.app',
    },
    {
        ProjectImg: AirtimeSeller,
        projectName : 'Airtime Seller.',
        ProjectDescr : 'I built this website with a modern and responsive user interface that is intuitive and easy to use.',
        projectStack: 'Stack/Tools used: React,Tailwindcss,Git,Vercel&Router',
        ProjectGit : 'github.com/DesmondNzubechi/Airtime-seller',
        ProjectUrl : 'airtimeseller-by-nzubechukwu.vercel.app/',
    },*/
   /* {
        ProjectImg: shoppy,
        projectName : 'Shoppy',
        ProjectDescr : 'Shoppy is an ecommerce website where user can buy Wristwatch, Clothes and you. I built this project in practice of my javascript skill. Items can be added and removed from cart.',
        projectStack: 'Stack/Tools used: HTML, CSS, BOOTSTRAP AND JAVASCRIPT.',
        ProjectGit : 'github.com/DesmondNzubechi/Ecommerce-Website',
        ProjectUrl : 'shoppy-by-nzubechukwu.netlify.app',
    },
    {
        ProjectImg: Fintek,
        projectName : 'Fintekk',
        ProjectDescr : 'This is a fintek landing page.I built this website with a modern and responsive user interface that is intuitive and easy to use.',
        projectStack: 'Stack/Tools used: React,Tailwindcss,Git,Vercel&Router',
        ProjectUrl : 'fintekk-landing-page.vercel.app/',
        ProjectGit : 'github.com/DesmondNzubechi/fintekk-landing-page ',
    },
   /* {
        ProjectImg: readerslodge,
        projectName : 'Readers Lodge',
        ProjectDescr : 'This is a book store that I built. The aim of the site is to give users to read/order and download different kinds of book from their home. The website is still under production but a demo link is provided below.  I built this website with a modern and responsive user interface that is intuitive and easy to use.',
        projectStack: 'Stack/Tools used: React,Tailwindcss,Git,Vercel&Router',
        ProjectUrl : 'readerslodge-by-nzubechukwu.vercel.app/',
        ProjectGit : 'github.com/DesmondNzubechi/Readers-lodge',
    },
   */
   
   /* {
        ProjectImg: HomeFeature,
        projectName : 'Home Features.',
        ProjectDescr : 'This is a real a state website where houses are sold.Each house has it location where you can easily locate it.  It is fully responsive and user friendly.',
        projectStack: 'Stack/Tools used: Html, Css, Bootstrap, Javascript',
        ProjectUrl : 'homefeatures.netlify.app',
        ProjectGit : 'github.com/DesmondNzubechi/Property-Management',
    },
  
    {
        ProjectImg: cgpaCalc,
        projectName : 'CGPA Calculator',
        ProjectDescr : 'This is a CGPA calculator. It is used to calculate students CGPA and it is very accurate.  I built this particular project for the students that finds ut difficult to calculate their CGPA',
        projectStack: 'Stack/Tools used:HTML, CSS AND JAVASCRIPT.',
        ProjectUrl  : 'cgpacalcby-nzubechukwu.vercel.app',
        ProjectGit : 'github.com/DesmondNzubechi/cgpa-calculator',
    },
  /*  {
        ProjectImg: b2rex,
        projectName : 'B2R Exchange',
        ProjectDescr : 'This a website where you can easily trade your gift card without any risk. It has great user experience.',
        projectStack: 'Stack/Tools used: HTML, CSS AND JAVASCRIPT.',
        ProjectUrl : 'b2rxchange.netlify.app',
        ProjectGit : 'github.com/DesmondNzubechi/Gift-Card-Exchange',
    }
  */
 
]

    return(
        <div className="text-slate-50 bg-gradient-to-b from-blue-900 to-Tp  min-h-[100vh] px-[30px] py-[50px] pt-[100px] ">
           <div className="my-[20px] text-center">
            <h1 className="text-[40px] uppercase font-myfont ">My Projects</h1>
            <p className="text-slate-200 text-[20px] font-fonty capitalize ">Take a look at the some of the project that i Built</p>
            </div> 

            <div className="mt-[50px] flex flex-col gap-5 ">

{
    projectItems.map(projects => (
        
        <div data-aos='fade-up' data-aos-duration='1000' className="flex flex-col mb-[150px] md:flex-row gap-[20px] items-end justify-center ">
        <div   className="max-w-[600px]  ">
        <img src={projects.ProjectImg} alt="" className="rounded transition ease-in delay-300 hover:-translate-y-1 hover:scale-100  shadow-2xl " />
        </div>
<div  className="flex flex-col gap-1 md:gap-4 max-w-[500px] ">
<h1 className="font-myfont text-[25px] mt-[10px]  ">{projects.projectName}</h1>
<p className="md:text-[17px] text-slate-300 ">{projects.ProjectDescr}</p>
<p className="md:text-[17px] text-slate-300 ">{projects.projectStack}</p>
<p className="flex flex-row gap-2 ">
    <a href={`https://${projects.ProjectGit}`} className="flex transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-50 flex-row text-slate-900 bg-slate-200 rounded px-[5px] py-[5px] gap-1 font-fonty shadow-2xl  text-[17px] items-center">View code <FiGithub className="  font-bold   "/></a>
    <a href={`https://${projects.ProjectUrl}`} className="flex transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 border text-slate-200 hover:text-slate-50 px-[10px] rounded gap-2 text-[17px] flex-row items-center">Visit<FaLink className="  font-bold   "/></a>
</p>
</div>
    </div>
    ))
}


            </div>
        </div>
    )
}