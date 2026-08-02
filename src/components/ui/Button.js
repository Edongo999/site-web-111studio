import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ text, variant = "primary", className = "", onClick, type = "button" }) => {
    const base = "px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-md inline-flex items-center justify-center";
    const variants = {
        primary: "bg-orange-600 hover:bg-orange-700 text-white",
        secondary: "bg-orange-500 hover:bg-orange-600 text-white"
    };
    return (_jsx("button", { type: type, onClick: onClick, className: `${base} ${variants[variant] ?? variants.primary} ${className}`, children: text }));
};
export default Button;
