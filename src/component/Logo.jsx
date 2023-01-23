import { FaStethoscope } from "react-icons/fa";

export default function Logo(){
    return(
        <div className="flex items-center">
            <FaStethoscope size={30} />
            <div className="text-lg font-bold font-sans text-purple-500 ml-3">Holadok</div>
        </div>
    );
}