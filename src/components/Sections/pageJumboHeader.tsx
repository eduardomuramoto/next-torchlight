import Image, { StaticImageData } from "next/image"
import photo from "@/../../public/images/Get_Support.jpg"
import BlueButton from "../Buttons/blueButton";

export default function JumboHeader({ title, subTitle, paragraphs, imgUrl, style = "orange", idName, button, alignTop = true, reverse = false, blueTitle = false, bgWhite = false }:
  { title: string, subTitle?: string, paragraphs: string[], imgUrl?: StaticImageData, style?: string, idName?: string, button?: { url: string, label: string }, alignTop?: boolean, reverse?: boolean, blueTitle?: boolean, bgWhite?: boolean }) {
  const bgColor = style === "orange" ? (bgWhite ? "bg-white" : "bg-lightForeground") : "bg-redBackground";
  const titleColor = style === "orange" ? (blueTitle ? "text-background" : "text-foreground") : "text-background";
  const marginTop = alignTop ? "" : "mt-auto";
  return (
    <div id={idName ? idName : ""}
      className={(reverse ? "flex-row-reverse " : "") + bgColor + " w-full flex flex-wrap lg:flex-nowrap gap-10 lg:gap-20 p-16 px-6 lg:px-36"}>
      <div className="w-full lg:w-1/2 h-1/3">
        <Image
          src={imgUrl ? imgUrl : photo}
          alt="Get Support photo"
          className="lazyload rounded-lg overflow-hidden"
          width={1200}
        />
      </div>
      <div className={marginTop + " w-full lg:w-1/2"}>
        {subTitle ? <p className="text-background text-2xl pb-6 font-semibold">{subTitle}</p> : ""}
        <h1 className={titleColor + " font-teko text-6xl uppercase font-semibold pb-6"}>{title}</h1>
        {paragraphs ? paragraphs.map((paragraph) => {
          return (<p className="text-gray-800 pb-4" key={paragraph}>{paragraph}</p>)
        })
          :
          <></>
        }
        {button ? <BlueButton label={button.label} url={button.url} /> : ""}
      </div>
    </div>
  )
}