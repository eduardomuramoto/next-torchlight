import Image from "next/image"
import photo from "@/../../public/images/Get_Support.jpg"

export default function JumboHeader() {
  return (
    <div className="w-full bg-lightForeground flex gap-20 p-16 px-36">
      <div>
      <Image
                  src={photo}
                  alt="Get Support photo"
                  className="lazyload rounded-lg overflow-hidden"
                  width={1200}
                />
      </div>
      <div>
      <p className="text-background text-2xl pb-6 font-semibold">Get Support</p>
      <h1 className="font-teko text-6xl uppercase font-semibold pb-6">Our Courses<br/> & Services</h1>
      <p className="text-gray-800 pb-4">At Torchlight Foundation, our mission is to provide education and resources to support mental health and wellness in our community.</p>
      <p className="text-gray-800 pb-4">We offer a variety of programmes and services to support mental health, including counselling, support groups, and educational workshops.</p>
      <p className="text-gray-800 pb-4">Over the past year, we have helped over 1,000 individuals in our community improve their mental health and well-being.</p>
      </div>
    </div>
  )}