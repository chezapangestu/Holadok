import Doctor from "./image 1.svg";
import Nav from "./component/Nav";
import Logo from "./component/Logo";
import Button from "./component/Button";
import Card from "./component/Card";
import Feature from "./component/Feature";


function App() {
  return (
<>

      <div className="container px-10 sm:px-10 md:px-20 lg:px-20 mx-auto">
        <div className="flex items-center">
          <div className="max-[767px]:pt-20">
            <Logo />
          </div>
          <div className="max-[767px]:hidden mx-auto">
            <Nav />
          </div>
          <div className="max-[767px]:hidden ml-auto text-right">
            <Button variant="purple" className="py-2 px-4">Login</Button>
            <Button variant="outline-purple" className="py-2 px-4">Book Now</Button>
          </div>
        </div>
        <div className=" grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div className="text-left font-dmSans pt-28 pb-36">
            <h1 className="text-3xl lg:text-5xl font-medium text-purple-500 leading-normal">Get the healthcare you need, when you need it.</h1>
            <p className=" text-lg text-purple-500 font-normal mt-5">Manage all of your healthcare needs in one convenient place – from booking appointments to tracking your health history.</p>
            <Button variant="purple-block" className="py-4 px-8 mt-10">Book an Appointment</Button>
          </div>
          <div className="max-[767px]:mx-auto lg:ml-auto md:mt-[30%] lg:mt-[30%]">
            <Card />
          </div>
          <div className="">
            <img className="z-10" src={Doctor} alt="doctor-display" />
          </div>
        </div>
        <div className="w-full">
          <Feature />
        </div>
      </div>
</>
  );
}

export default App;
