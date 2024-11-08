import Image, { StaticImageData } from "next/image"
import photo from "@images/donate.webp"
import OrangeButton from "../Buttons/orangeButton";

export default function OverlapSection({ title, paragraphs, url, label, imgUrl, targetBlank = false, style = "orange", reverse = false, smallPicture = false }: { title: string, subTitle: string, paragraphs: string[], url: string, label: string, imgUrl?: StaticImageData, targetBlank?: boolean, style?: string, reverse?: boolean, smallPicture?: boolean }) {
  const bgColor = style === "orange" ? "bg-lightForeground" : "bg-redBackground";
  const titleColor = style === "orange" ? "text-foreground" : "text-background";
  const reverseCols = reverse ? "flex-row-reverse " : "";


  return (
    <div className={reverseCols + "bg-white w-full flex-wrap lg:flex-nowrap flex lg:gap-20 p-16 px-6 lg:px-36 items-end"}>
      <div className={(reverse ? "lg:pr-8" : "lg:pl-8") + " lg:pb-8 w-full " + (smallPicture ? "lg:w-1/3" : "lg:w-1/2") + " h-1/3 z-10"}>
        <Image
          src={imgUrl ? imgUrl : photo}
          alt="Get Support photo"
          className="lazyload rounded-t-lg lg:rounded-lg overflow-hidden"
          width={1200}
        />
      </div>
      <div className={bgColor + "  w-full lg:w-[80%] rounded-b-lg lg:absolute lg:rounded-lg"}>
        <div className={(reverse ? "lg:w-1/2 lg:mr" : "lg:ml") + "-[50%] p-8"}>
          {/* <p className="text-background text-2xl pb-6 font-semibold">{subTitle}</p> */}
          <h1 className={titleColor + " font-teko text-4xl uppercase font-semibold pb-6"}>{title}</h1>
          {paragraphs ? paragraphs.map((paragraph) => {
            return (<p className="text-gray-800 pb-4" key={paragraph}>{paragraph}</p>)
          })
            :
            <>
              <p className="text-gray-800 pb-4">At Torchlight Foundation, our mission is to provide education and resources to support mental health and wellness in our community.</p>
              <p className="text-gray-800 pb-4">We offer a variety of programmes and services to support mental health, including counselling, support groups, and educational workshops.</p>
              <p className="text-gray-800 pb-4">Over the past year, we have helped over 1,000 individuals in our community improve their mental health and well-being.</p>
            </>
          }
          <a href={url} target={targetBlank ? "_blank" : ""}>
            <OrangeButton label={label} />
          </a>

        </div>
      </div>
    </div>
  )
}