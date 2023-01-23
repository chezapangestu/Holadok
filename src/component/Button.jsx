export default function Button({className, variant, children}){
    const addClassName = className ? ` ${className}` : "";

    const variants = {
        "outline-purple": `border-2 border-purple-500 text-base text-purple-500 font-bold font-dmSans`,
        "purple": "text-base text-purple-500 font-bold font-dmSans",
        "purple-block": `bg-purple-400 text-white text-lg font-dmSans`
    };

    const pickedVariant = variants[variant];

    return(
        <div className={`inline-block ${pickedVariant}${addClassName}`}>
            {children}
        </div>
    );
}