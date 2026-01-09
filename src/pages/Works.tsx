import type { FC } from "react";
import Section from "../components/Section";
import type { PageType } from "../App";
import Card from "../components/Card";
import { FaClipboardList, FaFilm, FaWeight } from "react-icons/fa";
import { FaCircleArrowDown, FaPhotoFilm } from "react-icons/fa6";

const Works: FC<PageType> = ({ setActive }) => {
    return (
        <Section
            setActive={setActive}
            className="pt-20 px-3 font-mono bg-emerald-800 text-stone-100 font-bold"
            id="works">
            <div>
                <p>I've created </p>
                <div className="py-2">
                    <span className="text-2xl bg-stone-100 text-emerald-800 p-1 rounded-md">
                        10+
                    </span>
                    <span> websites</span>
                </div>
                <p className="text-sm opacity-80">
                    using HTML, CSS, Tailwind, JavaScript, TypeScript, React,
                    Node, Express and MongoDb
                </p>
                <p className="flex items-center justify-center gap-2 my-2">
                    Example apps are below <FaCircleArrowDown />
                </p>
            </div>
            <div className="mt-5 flex gap-4 items-center justify-center flex-wrap">
                <Card
                    title="Table Note"
                    description="Excel like app for taking quick table note"
                    to="https://aungmyathtut-table-note.vercel.app">
                    <FaClipboardList className="text-3xl" />
                </Card>
                <Card
                    title="Activity Maker"
                    description="You can make activiy img with ease"
                    to="https://activity-maker-aungmyathtut.vercel.app">
                    <FaPhotoFilm className="text-3xl" />
                </Card>
                <Card
                    title="Movies App"
                    description="Movies app that you can find movies     with title"
                    to="https://movie-app-seven-sigma-91.vercel.app">
                    <FaFilm className="text-3xl" />
                </Card>
                <Card
                    title="Calories Tracker"
                    description="You can track your consumed calories"
                    to="https://calories-tracker-nine.vercel.app">
                    <FaWeight className="text-3xl" />
                </Card>
            </div>
        </Section>
    );
};

export default Works;
