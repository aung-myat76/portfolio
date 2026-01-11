import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type ContactLinkType = {
    to: string;
    title: string;
    children: ReactNode;
};

const ContactLink: FC<ContactLinkType> = ({ to, title, children }) => {
    return (
        <Link to={to} className="flex items-center gap-2 py-1 px-2">
            {children}
            <h2 className="font-bold">{title}</h2>
        </Link>
    );
};

export default ContactLink;
