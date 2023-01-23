import Rectangle from "./Rectangle 1.svg";
import Doctor from "./image 1.svg";
import Nav from "./component/Nav";
import Logo from "./component/Logo";
import Button from "./component/Button";
import Card from "./component/Card";
import Feature from "./component/Feature";


function App() {
  return (
<>
    {/* <div className="bg-hero"> */}

      <div className="container px-20 mx-auto">
        <div className="flex items-center">
          <div className="w-2/12">
            <Logo />
          </div>
          <div className="w-7/12">
            <Nav />
          </div>
          <img className="absolute z-0 top-0 right-[200px] h-[1000px]" src={Rectangle} alt="rectangle" />
          <div className="w-3/12 text-right z-20">
            <Button variant="purple" className="py-2 px-4">Login</Button>
            <Button variant="outline-purple" className="py-2 px-4">Book Now</Button>
          </div>
        </div>
        <div className="flex">
          <div className="w-4/12 text-left font-dmSans pt-28 pb-48">
            <h1 className="text-5xl font-medium text-purple-500 leading-normal">Get the healthcare you need, when you need it.</h1>
            <p className="w-11/12 text-lg text-purple-500 font-normal mt-5">Manage all of your healthcare needs in one convenient place – from booking appointments to tracking your health history.</p>
            <Button variant="purple-block" className="py-4 px-8 mt-10">Book an Appointment</Button>
          </div>
          <div className="w-3/12">
            <Card />
          </div>
          <div className="w-5/12">
            <img className="absolute z-10 h-[830px] right-[200px] top-20" src={Doctor} alt="rectangle" />
          </div>
        </div>
        <div className="w-full">
          <Feature />
        </div>
      </div>
    {/* </div> */}
</>
  );
}

export default App;
