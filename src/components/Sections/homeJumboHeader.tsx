import Image from "next/image"
import photo from "@/../../public/images/Lisa.png"
import OrangeButton from "../Buttons/orangeButton"
import Link from "next/link"

export default function HomeJumboHeader() {
  return (
    <div className="w-full bg-extraLightForeground flex gap-20 p-16 px-36 pb-0">
      <div>
      <h1 className="text-2xl pb-6 font-semibold">Welcome to Torchlight Foundation</h1>
      <p className="font-teko text-6xl text-background uppercase font-semibold pb-6">We’re with you<br/>every step of the way…</p>
      <p className="text-gray-800 pb-4">We are a nonprofit organization providing support to victims of domestic violence. We are also dedicated to empowering communities through  education, services and resources for those who may be experiencing a  family crisis.</p>
      
      <Link href="/about-us">
      <OrangeButton label="About Us" afterIcon="yes" url="/about-us"/>
      </Link>
      </div>
      <div>
      <Image
                  src={photo}
                  alt="Get Support photo"
                  className="lazyload rounded-lg overflow-hidden"
                  width={1200}
                />
      </div>
    </div>
  )}