import React from "react";
import { NavDesktop } from "../../Components/Nav/NavDesktop";
import { HeroSection } from "../../Components/Hero Section/HeroSection";
import { OverView } from "../../Components/OverView/Overview";
import { About } from "../../Components/About/About";
import { Projects } from "../../Components/Projects/projects";

export const Home = () => {
    return(
        <div className="bg-Tp py-[20px]">
<HeroSection/>
<OverView/>
<About/>
<Projects/>
        </div>
    )
}