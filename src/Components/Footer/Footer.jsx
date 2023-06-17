import React from "react";
import {HiLocationMarker} from 'react-icons/hi';
import {BsFillTelephoneOutboundFill} from 'react-icons/bs';
import {MdAttachEmail} from 'react-icons/md';
import {IoLogoWhatsapp} from 'react-icons/io';

export const Footer = () => {
    return(
        <footer>
            <hr />
            <div className="text-center py-[20px] ">
                <a href="http://" className="  text-[17px] text-slate-300 text-center font-myfont my-[10px] ">Nzubechukwu</a>
                <p className="text-slate-500  text-[15px] ">&copy; All Right Reserved {new Date().getFullYear()} </p>
            </div>
        </footer>
    )
}