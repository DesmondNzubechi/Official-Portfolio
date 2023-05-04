import React from "react";
import { NavDesktop } from "../../Components/Nav/NavDesktop";
import { HeroSection } from "../../Components/Hero Section/HeroSection";
import { OverView } from "../../Components/OverView/Overview";
import { About } from "../../Components/About/About";
import { Projects } from "../../Components/Projects/projects";
import { ContactMe } from "../../Components/Contacts/ContactMe";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";










export const Home = () => {
    return(
        
        <div className="bg-Tp  py-[20px]">
<HeroSection/>
<OverView/>
<About/>
<Projects/>
<ContactMe/>
        </div>
    )
}