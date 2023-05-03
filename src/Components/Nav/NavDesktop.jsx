import React from "react";
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa';

export const NavDesktop = () => {
    return(
        <div className="flex flex-row items-center gap-[20px] md:px-[50px] px-[20px] fixed top-0 left-0 right-0 w-full  px-[20px] py-[20px] justify-between ">
            <div className="bg-slate-100  w-fit shadow-2xl  p-2 mx-[20px] ">
                <h1 className="font-bold uppercase  text-slate-900">Nzube <br /> Chukwu</h1>
            </div>
            <div className="bg-slate-100 p-2 md:mr-[50px] shadow-xl ">
                <FaBars className="text-slate-900   text-[40px]  "/>
            </div>
<ul className="flex hidden flex-row gap-5  px-[10px] py-[5px] rounded-[5px] shadow-2xl  ">
    <li>
        <Link to='/' className='text-slate-50 text-[25px]   ' >Home</Link>
    </li>
    <li>
        <Link to='./About' className='text-slate-50 text-[25px]   ' >About Me</Link>
    </li>
    <li>
        <Link to='./Project' className='text-slate-50 text-[25px]   ' >My Projecs</Link>
    </li>
    <li>
        <Link to='./Skills' className='text-slate-50 text-[25px]   '  >Skills</Link>
    </li>
    <li>
        <Link to='./Contact'  className='text-slate-50 text-[25px]   ' >Contact Me</Link>
    </li>
</ul>
        </div>
    )
}