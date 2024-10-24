import Image, { StaticImageData } from "next/image"
import photo from "@images/JusticeRadio.jpg"
import BlueButton from "../Buttons/blueButton"

export default function JusticeRadioHeader() {
  return (
    <div className={"bg-white w-full gap-10 lg:gap-20 p-16 lg:px-36"}>
      <h1 className={"w-full text-center font-teko text-6xl uppercase font-semibold pb-6 text-background"}>Justice Radio</h1>
      <div className="w-full lg:w-1/2 h-1/3 float-start">
      <Image
                  src={photo}
                  alt="Justice Radio photo"
                  className="lazyload rounded-lg"
                  width={1200}
                />
      </div>
      <div className={"w-full lg:w-1/2 float-start lg:pl-8 pt-8"}>
        <p className="mb-10 text-gray-900">The Justice Radio podcast, hosted by Kylee Stone, amplifies the voices of survivors of abuse, fostering crucial discussions about domestic violence and exploring how we can all contribute to ending abuse.</p>
        <BlueButton label="View Podcast" url="https://www.youtube.com/@TorchlightFoundation" afterIcon="yes"/>
      </div>

    </div>
  )}