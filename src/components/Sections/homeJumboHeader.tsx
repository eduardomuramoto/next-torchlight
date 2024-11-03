import Image from "next/image"
import photo from "@/../../public/images/Lisa.png"
import Bg from "@images/section_bg.svg"
import Link from "next/link"
import BlueButton from "../Buttons/blueButton"

export default function HomeJumboHeader() {
  return (
    <div className="w-full bg-gradient-to-l from-orange-50 via-orange-50 to-orange-200 grid md:grid-cols-5 gap-20 p-16 px-6 lg:px-36 pb-0 relative">
      <Image
        src={Bg}
        alt="Background"
        className="lazyload absolute w-full max-h-1/2 bottom-0 left-0"
        width={300}
      />
      <div className="z-10 col-span-3 pb-20">
        <h1 className="text-2xl pb-6 font-semibold">Welcome to Torchlight Foundation</h1>
        <p className="font-teko text-6xl text-background uppercase font-semibold pb-6">We’re with you<br />every step of the way…</p>
        <p className="text-gray-800 pb-4">We are a nonprofit organization providing support to victims of domestic violence. We are also dedicated to empowering communities through  education, services and resources for those who may be experiencing a  family crisis.</p>

        <Link href="/about-us">
          <BlueButton label="About Us" afterIcon="yes" url="/about-us" />
        </Link>
      </div>
      <div className="z-10 col-span-2 flex items-end">
        <Image
          src={photo}
          alt="Lisa Cotton photo"
          className="lazyload aspect-auto max-w-[70%] lg:max-w-full object-contain"
          width={1200}
        />
        <div className="flex-col pb-4">
          <p className="text-gray-800 text-xs text-nowrap">Lisa Cotton</p>
          <p className="text-background text-xs text-nowrap">CEO & Founder</p>
        </div>
      </div>

    </div>
  )
}