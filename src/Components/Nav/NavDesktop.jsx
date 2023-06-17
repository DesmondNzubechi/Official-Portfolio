import React from "react";
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa';
import {AiFillTwitterSquare, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {MdOutgoingMail} from 'react-icons/md';
import {IoLogoWhatsapp} from 'react-icons/io';
import  {HiXMark} from 'react-icons/hi2';
import { useState } from "react";


export const NavDesktop = () => {
 
    const [navIcon, setNavIcon] = useState({
        hideIcon : false,
        showIcon : true,
    })
    const [navLink, setNavLink] = useState('left-[-3000px]');

    let showNavLink = () => {
        setNavIcon({
            hideIcon: true,
            showIcon: false,
        })
        setNavLink('left-0');
       
    };
    let hideNavLink = () => {
        setNavIcon({
            hideIcon : false,
            showIcon : true,
        });
        setNavLink('left-[-3000px]');
       
    }
    return(
        <div className="flex flex-row z-20 items-center overflow-x-0 bg-T border-b  border-slate-800 shadow-2xl gap-[20px] md:px-[50px] px-[20px] fixed top-0 left-0 right-0 w-full  px-[20px] py-[10px] justify-between ">
            <div className="  w-fit bg-slate-100 rounded relative z-[30] shadow-2xl  p-2 mx-[20px] ">
                <Link className="font-myfont text-[20px]  md:text-[25px] uppercase rounded text-slate-900"> NzubeChukwu</Link>
            </div>
            <div className=" p-2 md:mr-[50px] shadow-xl ">
             { navIcon.showIcon &&   <FaBars onClick={showNavLink} className="text-slate-100 relative z-[30]  text-[30px]  "/>}
               {navIcon.hideIcon && <HiXMark onClick={hideNavLink} className="text-slate-100 relative z-[30]  text-[30px]  "/>}
            </div>
<div className={` top-0 flex-row flex backdrop-blur-sm justify-center h-full transition ease-out duration-300   pt-[100px] ${navLink}  w-full  gap-5 fixed px-[10px] py-[5px] items-center rounded-[5px] shadow-2xl  `}>
    <ul className=" font-fonty  py-[50px] p gap-[20px] px-[50px] flex flex-col bg-Tp rounded shadow-2xl uppercase text-center ">
    <li>
        <Link onClick={hideNavLink} to='/' className='text-slate-50 text-[25px]   ' >Home</Link>
    </li>
    <li>
        <Link onClick={hideNavLink} to='/Project' className='text-slate-50 text-[25px]   ' >my Projects</Link>
    </li>
    <li>
        <Link onClick={hideNavLink} to='/Contact'  className='text-slate-50 text-[25px]   ' >Contact me</Link>
    </li>
    <div className="flex my-[20px] justify-center flex-row px-[5px] items-center z-[15]   gap-2  ">
          <a  href="https://linkedin.com/in/desmond-nzubechukwu-388954222/"> <AiFillLinkedin className=" md:text-[30px] text-[25px] text-slate-200 shadow-xl rounded-xl "/></a>
           <a href="https://twitter.com/Nzubechukwu101"> <AiFillTwitterSquare className=" md:text-[30px] text-[25px] shadow-xl text-slate-200 "/></a>
         <a href="https://github.com/DesmondNzubechi"> <AiFillGithub className=" md:text-[30px] text-[25px] shadow-xl text-slate-200 "/></a>  
           <a href="mailto:nzubestdesmond@gmail.com"><MdOutgoingMail  className=" md:text-[30px] text-[25px] shadow-xl text-slate-200 "/></a>
           <a href="https://wa.me/2347084183611?text=Hello%20Nzubechukwu,%20I%20got%20your%20contact%20from%20your%20website%20my%20name%20is%20..."><IoLogoWhatsapp className=" md:text-[30px] text-[20px] shadow-xl text-slate-200 " /></a> 
          
        </div>
    </ul>
</div>
        </div>
    )
}