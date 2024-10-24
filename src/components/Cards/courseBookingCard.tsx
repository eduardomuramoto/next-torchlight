import { useRouter } from "next/navigation";
import { useState } from "react";
import BlueOutlineButton from "../Buttons/blueOutlineButton";
import ClockComponent from "../Icons/clock";
import CornerComponent from "../Icons/corner";

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
  const router = useRouter();
  const [formData, setFormData] = useState({
    code: category.toString(), // The hidden input field
    location: '', // Radio button selection
    groupClasses: false, // Checkbox state
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert all form data values to strings before using URLSearchParams
    const queryParams = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, String(value)])
    );
    // Redirect with form data as query parameters
    const queryString = new URLSearchParams(queryParams).toString(); 
    router.push(`/get-support/courses/booking/${slug}?${queryString}`);
  };

  
  return (
    <div className="absolute top-0 right-0 p-10 px-20">
    <div className="relative overflow-hidden flex flex-col p-6 max-w-sm min-w-80 bg-white border-2 border-background text-background font-semibold rounded-md">
      <CornerComponent color={courseColor} className="absolute top-0 right-0 w-5/12 h-auto"/>
      <form onSubmit={handleSubmit} className="">

      <div className="w-11/12">
      <h4 className="text-xl">Book Course</h4>


      <p className="pt-2 text-xl font-medium">{"$" + price + "/Guest"}</p>
      <p className="flex text-gray-600 text-sm items-center pr-2"><span className="pr-1"><ClockComponent/></span>{duration.value +" "+ duration.unit + (duration.value>1?"s":"")}</p>

      </div>
      <div>
      <div className="flex flex-col mb-4">
        {location.includes("In Person")? (<label className="flex text-gray-600 text-sm items-center pr-2">
          <input
            type="radio"
            name="location"
            required={true}
            value="in-person"
            checked={formData.location === 'in-person'}
            onChange={handleChange}
          /> In-Person</label>):""}
        {location.includes("Online")? (<label className="flex text-gray-600 text-sm items-center pr-2"> 
          <input
            type="radio"
            name="location"
            required={true}
            value="online"
            checked={formData.location === 'online'}
            onChange={handleChange}
          /> Online</label>):""}
      </div>
      <div>
        <p className="pt-2 text-lg font-bold">Request a group class</p>
        <label className="flex text-gray-600 text-sm items-center pr-2">
          <input
            type="checkbox"
            name="groupClasses"
            checked={formData.groupClasses}
            onChange={handleChange}
          />
          For Groups of 6 to 16 guests
        </label>
      </div>
      {/* Hidden input */}
      <input
        type="hidden"
        name="code"
        value={formData.code}
      />

      </div>
      <div className="flex w-full justify-end mt-8">
      <BlueOutlineButton label="Request" afterIcon="yes" isSubmit={true}/>
      </div>
        <p className="pt-2 text-xs text-gray-600">We usually respond by the next business day</p>
      </form>
    </div>
    </div>
  )}