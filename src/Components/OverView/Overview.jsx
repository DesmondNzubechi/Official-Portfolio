import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


export const OverView = () => {
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
    return(
        <div className=" p-[20px] min-h-[100v] bg-gray-800 m-[20px] my-[50px] rounded  flex justify-center text-center">
          
            <div data-aos='fade-up' data-aos-duration='1000' className="px-[20px]  py-[70px] md:max-w-[500px] max-w-[400px] flex flex-col gap-[20px] ">
                <h1 className="text-[20px] md:text-[30px]  font-myfont text-slate-50 uppercase  ">Developing & Bringing <br /> ideas to live</h1>
                <p className=" text-slate-300 text-[20px]  md:text-[30px] ">I build product that is user-friendly and accessible by the right user.</p>
           
            </div>
        </div>
    )
}