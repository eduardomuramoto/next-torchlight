import Image, { StaticImageData } from "next/image"
import photo from "@images/Lisa.png"
import signature from "@images/LisaCotton.png"

export default function CeoSection({ title, subTitle, paragraphs, imgUrl, style = "blue" }: { title: string, subTitle: string, paragraphs: string[], imgUrl?: StaticImageData, style?: string }) {
  const bgColor = style === "orange" ? "bg-lightForeground" : "bg-lightForeground";
  const titleColor = style === "orange" ? "text-foreground" : "text-background";


  return (
    <div className={"bg-white w-full flex flex-col p-16 lg:px-36"}>
      <div className="flex items-center flex-col relative">
        <div className="absolute bottom-0 right-0 h-96 w-auto">
          <Image
            src={imgUrl ? imgUrl : photo}
            alt="Get Support photo"
            className="lazyload"
            width={300}
          />
        </div>
        <h2 className={titleColor + " font-teko text-4xl uppercase font-semibold pb-6"}>{title}</h2>
        <div className={bgColor + "  w-[80%] rounded-lg p-12 mr-40 pr-36"}>
          <h3 className="text-foreground font-teko uppercase text-6xl pb-6 font-semibold"><span className="pr-2">"</span>{subTitle}</h3>
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
          <div className="justify-self-end">
            <Image
              src={signature}
              alt="Lisa Cotton Signature"
              className="lazyload"
              width={120}
            />
            <p className="text-gray-800 text-xs">CEO & Founder</p>
          </div>
        </div>
      </div>
    </div>
  )
}