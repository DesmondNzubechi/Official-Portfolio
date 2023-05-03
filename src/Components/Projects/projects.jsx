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

import {FiExternalLink, FiGithub} from 'react-icons/fi';
import {FaLink} from 'react-icons/fa';


export const Projects = () => {

const projectItems = [
    {
        ProjectImg: eeunizik,
        projectName : 'EE-UNIZIK',
        ProjectDescr : 'This A E-Library Website for Electrical Engineering students in UNIZIK where they can download course outlines for each course and also dowload reading resources like handouts, exam past question and textbooks. They can also calculate their CGPA on the website. The website is under production. The link provided below is the demo link. ',
        projectStack: 'Stack/Tools used: React,Tailwindcss,Git,Router',
        ProjectUrl : 'hh',
        ProjectGit : 'gg',
    },
    {
        ProjectImg: Myhealth,
        projectName : 'My Health',
        ProjectDescr : 'This is a healthcare website where patients can book treatment online from comfort of their home. It  has great user experience',
        projectStack: 'Stack/Tools used: Html, Css, Javascript',
        ProjectUrl : 'hh',
        ProjectGit : 'gg',
    },
    {
        ProjectImg: AirtimeSeller,
        projectName : 'Airtime Seller.',
        ProjectDescr : 'I built this website with a modern and responsive user interface that is intuitive and easy to use.',
        projectStack: 'Stack/Tools used: React,Tailwindcss,Git,Vercel&Router',
        ProjectUrl : 'hh',
        ProjectGit : 'gg',
    },
    {
        ProjectImg: shoppy,
        projectName : 'Shoppy',
        ProjectDescr : 'Shoppy is an ecommerce website where user can buy Wristwatch, Clothes and you. I built this project in practice of my javascript skill. Items can be added and removed from cart.',
        projectStack: 'Stack/Tools used: HTML, CSS, BOOTSTRAP AND JAVASCRIPT.',
        ProjectUrl : 'hh',
        ProjectGit : 'gg',
    },
    {
        ProjectImg: nuesa,
        projectName : 'Nuesa unizik',
        ProjectDescr : 'This a website for faculty of engineering unizik where its students can download reading material and also read article about engineering. I am among the team that built the website. I worked on the frontend,',
        projectStack: 'Stack/Tools used: React, NodeJs, MongoDB, Postman,Tailwindcss,Git,Vercel&Router',
        ProjectUrl : 'hh',
        ProjectGit : 'gg',
    },
    {
        ProjectImg: Fintek,
        projectName : 'Fintekk',
        ProjectDescr : 'This is a fintek landing page.I built this website with a modern and responsive user interface that is intuitive and easy to use.',
        projectStack: 'Stack/Tools used: React,Tailwindcss,Git,Vercel&Router',
        ProjectUrl : 'hh',
        ProjectGit : 'gg',
    },
    {
        ProjectImg: readerslodge,
        projectName : 'Readers Lodge',
        ProjectDescr : 'This is a book store that I built. The aim of the site is to give users to read/order and download different kinds of book from their home. The website is still under production but a demo link is provided below.  I built this website with a modern and responsive user interface that is intuitive and easy to use.',
        projectStack: 'Stack/Tools used: React,Tailwindcss,Git,Vercel&Router',
        ProjectUrl : 'hh',
        ProjectGit : 'gg',
    },
   
   
    {
        ProjectImg: HomeFeature,
        projectName : 'Home Features.',
        ProjectDescr : 'This is a real a state website where houses are sold.Each house has it location where you can easily locate it.  It is fully responsive and user friendly.',
        projectStack: 'Stack/Tools used: Html, Css, Bootstrap, Javascript',
        ProjectUrl : 'hh',
        ProjectGit : 'gg',
    },
  
    {
        ProjectImg: cgpaCalc,
        projectName : 'CGPA Calculator',
        ProjectDescr : 'This is a CGPA calculator. It is used to calculate students CGPA and it is very accurate.  I built this particular project for the students that finds ut difficult to calculate their CGPA',
        projectStack: 'Stack/Tools used:HTML, CSS AND JAVASCRIPT.',
        ProjectUrl : 'hh',
        ProjectGit : 'gg',
    },
    {
        ProjectImg: b2rex,
        projectName : 'B2R Exchange',
        ProjectDescr : 'This a website where you can easily trade your gift card without any risk. It has great user experience.',
        projectStack: 'Stack/Tools used: HTML, CSS AND JAVASCRIPT.',
        ProjectUrl : 'hh',
        ProjectGit : 'gg',
    }
  
]

    return(
        <div className="text-slate-50 min-h-[100vh] px-[30px] py-[50px] pt-[100px] ">
           <div className="my-[20px] ">
            <h1 className="text-[40px] uppercase font-myfont ">My Projects</h1>
            <p className="text-slate-200 text-[20px] font-fonty ">Take a look at the some of the project that i Built</p>
            </div> 

            <div className="mt-[50px] flex flex-col gap-5 ">

               
{
    projectItems.map(projects => (
        
        <div className="flex flex-col min-h-[70vh] md:flex-row gap-[20px] items-end justify-center ">
        <div className="max-w-[600px] hover:max-w-[580px] ">
        <img src={projects.ProjectImg} alt="" className="rounded shadow-2xl " />
        </div>
<div className="flex flex-col gap-1 md:gap-4 max-w-[500px] ">
<h1 className="font-myfont text-[25px] mt-[10px]  ">{projects.projectName}</h1>
<p className="md:text-[17px] text-slate-300 ">{projects.ProjectDescr}</p>
<p className="md:text-[17px] text-slate-300 ">{projects.projectStack}</p>
<p className="flex flex-row gap-2 ">
    <a href="http://" className="flex hover:bg-slate-50 flex-row text-slate-900 bg-slate-200 rounded px-[5px] py-[5px] gap-1 font-fonty shadow-2xl  text-[17px] items-center">View code <FiGithub className="  font-bold   "/></a>
    <a href="http://" className="flex border text-slate-200 hover:text-slate-50 px-[10px] rounded gap-2 text-[17px] flex-row items-center">Visit<FaLink className="  font-bold   "/></a>
</p>
</div>
    </div>
    ))
}


            </div>
        </div>
    )
}