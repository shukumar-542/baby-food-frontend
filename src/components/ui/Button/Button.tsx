
type TButtonProps ={
    children : React.ReactNode,
    type?: "submit" | "reset" | "button" | undefined;
    className?: string;
}

const Button = ({children , type , className} :  TButtonProps) => {
    return (
        <button type={type} className={`${className} bg-[#f2f4f8] text-[#3749bb] hover:bg-[#3749bb] hover:text-[white] font-semibold px-4 py-2 rounded-sm flex items-center justify-center`}>
            {children}
        </button>
    );
};

export default Button;