import React from "react";
import HeroImg from '../../assets/nzube.png';
import {HiLocationMarker} from 'react-icons/hi';
import {BsFillTelephoneOutboundFill} from 'react-icons/bs';
import {MdAttachEmail} from 'react-icons/md';
import {IoLogoWhatsapp} from 'react-icons/io';
import { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';


 
export const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
     e.preventDefault();
  
      emailjs.sendForm('service_2ijos78', 'template_yocf07d', form.current, 'TN_LogzUsxIiZdUEb')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  

    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);


    return(
        <div className="min-h-[100vh] overflow-x-0 rounded after:bg-Contact p-[30px] bg-fixed after:min-h-[100%] relative after:absolute after:top-0 after:left-0 after:right-0 after:w-full bg-cover bg-no-repeat bg-[url('Components/Contacts/nzube.png')] ">
            <div data-aos='fade-up' data-aos-duration='1000' className="relative z-10">
            <div className="text-start pb-[20px] pt-[80px] ">
                <h1 className="font-myfont text-slate-50 uppercase text-[30px] md:text-[40px] ">Contact Me</h1>
                <p className="md:text-[20px]  text-[15px] text-slate-300 font-fonty  ">Get in touch with me</p>
            </div>
            <div className="flex flex-col  gap-[20px] items-start justify-center ">
            <div className="relative flex flex-col md:flex-row gap-5 z-10">
                    
                    <div className="flex flex-row gap-1 items-center ">
                        <HiLocationMarker className="text-slate-50 text-[25px] "/>
                        <p className="text-[15px] text-slate-100 font-fonty ">Enugu, Nigeria.</p>
                    </div>
                    <a className="flex flex-row gap-1 items-center " href="mailto:nzubestdesmond@gmail.com">
                        <MdAttachEmail className="text-slate-50 text-[25px] "/>
                       <span className="text-[15px] text-slate-100 font-fonty ">Nzubestdesmond@gmail.com</span> 
                    </a>
                    <a className="flex flex-row gap-1 items-center " href="tel:+2347084183411"><BsFillTelephoneOutboundFill className="text-slate-50 text-[25px] "/><span className="text-[15px] text-slate-100 font-fonty ">+234 708 4183 611</span> </a>
                                    </div>
                <form action="" ref={form} onSubmit={sendEmail} className="grid grid-cols-1 w-full md:grid-cols-2 gap-5">
                    <div>
                        <label className="text-slate-100 text-[20px] font-fonty " htmlFor="name">Name:</label>
                        <input required className="bg-Contact outline-0 text-white w-full py-[10px] px-[10px] rounded text-[15px] md:text-[20px] " type="text" name="from_name" placeholder="Full Name" id="" />
                    </div>
                    <div>
                        <label className="text-slate-100 text-[20px] font-fonty " htmlFor="email">email:</label>
                        <input required className="bg-Contact outline-0 text-white w-full py-[10px] px-[10px] rounded text-[15px] md:text-[20px] " type="email" name="from_email" placeholder="Email" id="" />
                    </div>
        
                    <div className="md:col-span-2 ">
                        <label className="text-slate-100 text-[20px] font-fonty " htmlFor="message">Message:</label>
                        <textarea required className="bg-Contact outline-0 text-white w-full py-[10px] px-[10px] min-h-[100px] rounded text-[15px] md:text-[20px] " name="message" id=""placeholder="Write Your Message" ></textarea>
                    </div>
                    <button  className=" md:float-right  transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 w-fit self-start bg-slate-200  px-[5px] text-[18px] md:text-[25px] font-fonty rounded hover:bg-slate-400 " type="submit">Send</button>
                </form>
                
                    
            </div>
            </div>
        </div>
    )
}