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
}

export default function CourseCard({courseColor, title, category, price,slug}:CourseCardProps) {
  return (
    <div className="relative overflow-hidden flex flex-col justify-between p-6 max-w-sm min-h-96 min-w-80 bg-white border-2 border-background text-background font-semibold rounded-md">
      <CornerComponent color={courseColor} className="absolute top-0 right-0 w-5/12 h-auto"/>
      <div className="w-11/12">
        <h6 className="text-sm font-thin">{category}</h6>
      <h3 className="text-2xl">{title}</h3>
        </div>
      <div>
      <div className="flex mb-4">
        <p className="flex text-gray-600 text-sm items-center pr-2"><span className="pr-1"><ClockComponent/></span> 16 hours</p>
        <p className="flex text-gray-600 text-sm items-center pr-2"><span className="pr-1"><InPersonComponent/></span> In-Person</p>
        <p className="flex text-gray-600 text-sm items-center pr-2"><span className="pr-1"><ComputerComponent/></span> Online</p>
      </div>
      <p className="text-2xl font-medium">{"$" + price + "/Guest"}</p>
      <div className="flex w-full justify-end mt-4">
      <BlueOutlineButton label="View Course" afterIcon="yes" url={"/get-support/courses/" + slug}/>
      {/* <button className="css style SS_ProductCheckout" type="button" data-id="1" data-email="<userEmail>" data-url="http://localhost:1337"> BuyNow </button> */}

      </div>
      </div>
    </div>
  )}