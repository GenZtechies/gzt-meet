import React from "react";

const Input = ({ className, ...props }: React.HTMLProps<HTMLInputElement>) => {
    return <input className={`p-3 rounded-xl  outline-none  ${className}`} {...props} />;
};

export default Input;
