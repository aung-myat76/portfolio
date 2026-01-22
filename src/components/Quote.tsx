import type { FC, ReactNode } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

type QuoteType = {
    children: ReactNode;
};

const Quote: FC<QuoteType> = ({ children }) => {
    return (
        <h2 className="text-2xl mb-2 font-bold nowrap flex-nowrap font-mono flex gap-2 mx-2">
            <FaQuoteLeft className="min-w-3 w-3" />
            {children}
            <FaQuoteRight className="min-w-3 w-3" />
        </h2>
    );
};

export default Quote;
