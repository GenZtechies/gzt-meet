import React from "react";

const Button = ({ children, className, ...props }: React.HTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={`px-5 py-3 text-white bg-primary hover:bg-primary-dark active:bg-primary rounded-xl min-w-fit ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
