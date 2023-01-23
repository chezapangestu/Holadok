export default function NavItem({children, variant}){
    const variants = {
        "hovered": `text-black font-semibold`,
        "non-hovered": `text-purple-500 opacity-80`
    };

    const pickedVariant = variants[variant];

    return(
        <li><div className={`text-base font-sans ${pickedVariant}`}>{children}</div></li>
    );
}