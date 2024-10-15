import Image, { StaticImageData } from "next/image"
import photo from "@images/donate.webp"
import OrangeButton from "../Buttons/orangeButton";

export default function OverlapSection({title, subTitle, paragraphs, imgUrl, style="orange", reverse=false }:{title:string, subTitle:string, paragraphs:string[], imgUrl?:StaticImageData, style?:string, reverse?:boolean}) {
  const bgColor = style==="orange"? "bg-lightForeground": "bg-redBackground";
  const titleColor = style==="orange"? "text-foreground": "text-background";
  const reverseCols = reverse? "flex-row-reverse ":"";

  return (
    <div className={ reverseCols + "bg-white w-full flex gap-20 p-16 px-36 items-end"}>
      <div className={(reverse? "pr-8":"pl-8")+" pb-8 w-1/2 h-1/3 z-10"}>
      <Image
                  src={imgUrl?imgUrl:photo}
                  alt="Get Support photo"
                  className="lazyload rounded-lg overflow-hidden"
                  width={1200}
                />
      </div>
      <div className={ bgColor + " w-[80%] absolute rounded-lg"}>
        <div className={(reverse? "w-1/2 mr":"ml")+"-[50%] p-8"}>
          <p className="text-background text-2xl pb-6 font-semibold">{subTitle}</p>
          <h1 className={titleColor +" font-teko text-4xl uppercase font-semibold pb-6"}>{title}</h1>
          {paragraphs? paragraphs.map((paragraph) => {
            return(<p className="text-gray-800 pb-4" key={paragraph}>{paragraph}</p>)
          })
          :
          <>
          <p className="text-gray-800 pb-4">At Torchlight Foundation, our mission is to provide education and resources to support mental health and wellness in our community.</p>
          <p className="text-gray-800 pb-4">We offer a variety of programmes and services to support mental health, including counselling, support groups, and educational workshops.</p>
          <p className="text-gray-800 pb-4">Over the past year, we have helped over 1,000 individuals in our community improve their mental health and well-being.</p>
          </>
          }
          <OrangeButton label="Donate"/>
        </div>
      </div>
    </div>
  )}