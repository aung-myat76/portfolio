import type { FC } from "react";
import Section from "../components/Section";
import type { PageType } from "../App";
import {
    FaCss3,
    FaGitAlt,
    FaHtml5,
    FaJs,
    FaLaptop,
    FaNode,
    FaPaintRoller,
    FaReact,
    FaTools
} from "react-icons/fa";
import Article from "../components/Article";
import Quote from "../components/Quote";
import { SiExpress, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";

const Services: FC<PageType> = ({ setActive }) => {
    return (
        <Section
            setActive={setActive}
            className="bg-emerald-700 text-stone-100 py-20 px-3 "
            id="services">
            <Quote>What I can Offer</Quote>
            <Article
                title="Development"
                description="Building the full-stack engine using the MERN ecosystem.">
                <FaLaptop className="" />
            </Article>
            <Article
                title="Design"
                description="Crafting responsive layouts with Tailwind CSS and interactive prototypes with smooth animations using Framer Motion.">
                <FaPaintRoller />
            </Article>
            <Article
                title="Strategy"
                description="Mapping out data structures with TypeScript for a bug-free foundation.">
                <FaTools />
            </Article>
            <Article
                title="Git & Version Control"
                description="I ensure secure, scalable MERN projects using professional Git workflows.">
                <FaGitAlt />
            </Article>
            {/* <Article
                title="Deployment"
                description="Optimizing for SEO and launching on high-speed cloud hosting.">
                <FaRocket />
            </Article> */}
            <div className="mt-10">
                {/* <span className="text-xl font-bold ">My Tech Stack</span> */}
                <div className="flex text-4xl  gap-6 justify-evenly items-center flex-wrap text-wrap">
                    <FaHtml5 className="bg-stone-100 p-1 rounded-sm text-orange-600" />
                    <FaCss3 className="bg-stone-100 p-1 rounded-sm text-blue-600" />
                    <FaJs className="bg-stone-100 p-1 rounded-sm text-yellow-500" />
                    <SiTypescript className="bg-stone-100 p-1 rounded-sm text-blue-700" />
                    <RiTailwindCssFill className="bg-stone-100 p-1 rounded-sm text-green-600" />
                    <TbBrandFramerMotion className="bg-stone-100 p-1 rounded-sm text-pink-600" />
                    <FaReact className="bg-stone-100 p-1 rounded-sm text-blue-700" />
                    <FaNode className="bg-stone-100 p-1 rounded-sm text-green-800" />
                    <SiExpress className="bg-stone-100 p-1 rounded-sm text-stone-900" />
                    <DiMongodb className="bg-stone-100 p-1 rounded-sm text-green-900" />
                </div>
            </div>
        </Section>
    );
};

export default Services;
