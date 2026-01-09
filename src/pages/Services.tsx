import type { FC } from "react";
import Section from "../components/Section";
import type { PageType } from "../App";

const Services: FC<PageType> = ({ setActive }) => {
    return (
        <Section setActive={setActive} className="bg-emerald-700" id="services">
            Services
        </Section>
    );
};

export default Services;
