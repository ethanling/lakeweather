import React from "react";

const Emoji = ({ children, label, className }) => (
    <span role="img" aria-label={label} className={className}>
        {children}
    </span>
);

export default Emoji
