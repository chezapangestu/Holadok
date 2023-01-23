// import FeatureItem from "./FeatureItem";
import { RxCalendar } from "react-icons/rx";
import { FiBell } from "react-icons/fi";
import { TbDeviceComputerCamera } from "react-icons/tb";

export default function Feature(){
    return(
        <div className="flex bg-purple-400 relative z-50 p-10">
            <div className="flex justify-center">  
              <div className="w-16">
                <RxCalendar size={40} color="lightgray" />
              </div>
              <div className="w-8/12">
                <h1 className=" text-white">Online appointment scheduling</h1>
                <p className="w-12/12 text-gray-400">Allows users to schedule appointments with their healthcare provider through the app.</p>
              </div>
            </div>
            <div className="flex  justify-center">  
              <div className="w-16">
                <FiBell size={40} color="lightgray" />
              </div>
              <div className="w-8/12">
                <h1 className=" text-white">Medication reminders</h1>
                <p className="w-12/12 text-gray-400">Allows users to schedule appointments with their healthcare provider through the app.</p>
              </div>
            </div>
            <div className="flex  justify-center">  
              <div className="w-16">
                <TbDeviceComputerCamera size={40} color="lightgray" />
              </div>
              <div className="w-8/12">
                <h1 className=" text-white">Virtual consultations</h1>
                <p className="w-12/12 text-gray-400">Allows users to schedule appointments with their healthcare provider through the app.</p>
              </div>
            </div>
          </div>
    );
}