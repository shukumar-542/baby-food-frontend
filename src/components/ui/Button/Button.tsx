
type TButtonProps ={
    children : React.ReactNode,
    type?: "submit" | "reset" | "button" | undefined;
    className?: string;
    onClick?: () => void;
}

const Button = ({children , type , className , onClick} :  TButtonProps) => {
    return (
        <button type={type} className={`${className} uppercase  text-white bg-gradient-to-r from-[#01B0B9] to-[#00C9AD] hover:bg-gradient-t-r hover:from-[#00C9AD] hover:to-[#01B0B9]`}
        onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;