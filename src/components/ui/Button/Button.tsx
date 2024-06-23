
type TButtonProps ={
    children : React.ReactNode,
    type?: "submit" | "reset" | "button" | undefined;
    className?: string;
}

const Button = ({children , type , className} :  TButtonProps) => {
    return (
        <button type={type} className={`${className} uppercase  text-white bg-gradient-to-r from-[#01B0B9] to-[#00C9AD] hover:bg-gradient-t-r hover:from-[#00C9AD] hover:to-[#01B0B9]`}>
            {children}
        </button>
    );
};

export default Button;