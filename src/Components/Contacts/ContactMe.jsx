import React from "react";
import HeroImg from '../../assets/nzube.png';
import {HiLocationMarker} from 'react-icons/hi';
import {BsFillTelephoneOutboundFill} from 'react-icons/bs';
import {MdAttachEmail} from 'react-icons/md';
import {IoLogoWhatsapp} from 'react-icons/io';
export const ContactMe = () => {
    return(
        <div className="min-h-[100vh] after:bg-Contact p-[30px] bg-fixed after:min-h-[100%] relative after:absolute after:top-0 after:left-0 after:right-0 after:w-full bg-cover bg-no-repeat bg-[url('Components/Contacts/nzube.png')] ">
            <div className="relative z-10">
            <div className="text-start pb-[20px] pt-[80px] ">
                <h1 className="font-myfont text-slate-50 uppercase text-[40px] ">Contact Me</h1>
                <p className="text-[20px] text-slate-300 font-fonty  ">Get in touch with me</p>
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
                <form action="" className="grid grid-cols-1 w-full md:grid-cols-2 gap-5">
                    <div>
                        <label className="text-slate-100 text-[20px] font-fonty " htmlFor="name">Name:</label>
                        <input className="bg-Contact outline-0 text-white w-full py-[10px] px-[10px] rounded text-[15px] md:text-[20px] " type="text" name="name" placeholder="Full Name" id="" />
                    </div>
                    <div>
                        <label className="text-slate-100 text-[20px] font-fonty " htmlFor="email">email:</label>
                        <input className="bg-Contact outline-0 text-white w-full py-[10px] px-[10px] rounded text-[15px] md:text-[20px] " type="email" name="email" placeholder="Email" id="" />
                    </div>
                    <div className="md:col-span-2 ">
                        <label className="text-slate-100 text-[20px] font-fonty " htmlFor="message">Message:</label>
                        <textarea className="bg-Contact outline-0 text-white w-full py-[10px] px-[10px] min-h-[100px] rounded text-[15px] md:text-[20px] " name="" id=""placeholder="Write Your Message" ></textarea>
                    </div>
                    <button className=" self-start bg-slate-200 py-[5px] px-[5px] text-[25px] font-fonty rounded hover:bg-slate-400 " type="submit">Send message</button>
                </form>
                
                    
            </div>
            </div>
        </div>
    )
}