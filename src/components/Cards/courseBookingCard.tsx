import BlueOutlineButton from "../Buttons/blueOutlineButton";
import ClockComponent from "../Icons/clock";
import ComputerComponent from "../Icons/computer";
import CornerComponent from "../Icons/corner";
import InPersonComponent from "../Icons/inPerson";

type CourseCardProps = {
  courseColor : string,
  title: string,
  category: string,
  price: string,
  slug?: string,
  location: string[], 
  duration: any, 
}

export default function CourseBookingCard({courseColor, title, category, price,slug,location,duration}:CourseCardProps) {
  return (
    <div className="absolute top-0 right-0 p-10 px-20">
    <div className="relative overflow-hidden flex flex-col justify-between p-6 max-w-sm min-h-96 min-w-80 bg-white border-2 border-background text-background font-semibold rounded-md">
      <CornerComponent color={courseColor} className="absolute top-0 right-0 w-5/12 h-auto"/>
      <div className="w-11/12">
      <h4 className="text-xl">Book Course</h4>
      <p className="pt-2 text-xl font-medium">{"$" + price + "/Guest"}</p>
      <p className="flex text-gray-600 text-sm items-center pr-2"><span className="pr-1"><ClockComponent/></span>{duration.value +" "+ duration.unit + (duration.value>1?"s":"")}</p>

      </div>
      <div>
      <div className="flex flex-col mb-4">
        {location.includes("In Person")? (<p className="flex text-gray-600 text-sm items-center pr-2"><span className="pr-1"><InPersonComponent/></span> In-Person</p>):""}
        {location.includes("Online")? (<p className="flex text-gray-600 text-sm items-center pr-2"><span className="pr-1"><ComputerComponent/></span> Online</p>):""}
      </div>
      <div className="flex w-full justify-end mt-4">
      <BlueOutlineButton label="Request" afterIcon="yes" url={"/get-support/courses/booking/" + slug}/>

      </div>
      </div>
    </div>
    </div>
  )}