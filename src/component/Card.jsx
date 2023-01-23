import Ellipse from "../Ellipse 1.png";
import { FaQuoteRight } from "react-icons/fa";

export default function Card(){
    return(
        <div className="w-80 absolute top-[235px] right-[700px] z-40 bg-white rounded-2xl shadow-xl px-5 py-6">
              <div className="flex items-center justify-between">
                <img className="h-8" src={Ellipse} alt="avatar"></img>
                <p className="font-sans font-semibold text-xs ml-3">Jane Doe</p>
                <FaQuoteRight className="ml-auto" size={30} color="lightgray"/>
              </div>
              <p className="mt-5 font-sans text-xs text-purple-500 leading-5">“The doctor appointment app has been great for me. Scheduling appointments and getting medication reminders is much easier, and I love the option for virtual consultations. I'd recommend this app to others.”</p>
        </div>
    );
}