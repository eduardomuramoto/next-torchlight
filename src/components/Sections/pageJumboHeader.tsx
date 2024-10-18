import Image, { StaticImageData } from "next/image"
import photo from "@/../../public/images/Get_Support.jpg"

export default function JumboHeader({title, subTitle, paragraphs, imgUrl, style="orange", alignTop=true }:{title:string, subTitle:string, paragraphs:string[], imgUrl?:StaticImageData, style?:string, alignTop?:boolean}) {
  const bgColor = style==="orange"? "bg-lightForeground": "bg-redBackground";
  const titleColor = style==="orange"? "text-foreground": "text-background";
  const marginTop = alignTop? "" :"mt-auto"; 
  return (
    <div className={bgColor + " w-full flex flex-wrap lg:flex-nowrap gap-10 lg:gap-20 p-16 lg:px-36"}>
      <div className="w-full lg:w-1/2 h-1/3">
      <Image
                  src={imgUrl?imgUrl:photo}
                  alt="Get Support photo"
                  className="lazyload rounded-lg overflow-hidden"
                  width={1200}
                />
      </div>
      <div className={marginTop + " w-full lg:w-1/2"}>
      <p className="text-background text-2xl pb-6 font-semibold">{subTitle}</p>
      <h1 className={titleColor +" font-teko text-6xl uppercase font-semibold pb-6"}>{title}</h1>
      {paragraphs? paragraphs.map((paragraph) => {
        return(<p className="text-gray-800 pb-4" key={paragraph}>{paragraph}</p>)
      })
      :
        <></>
      }
      </div>
    </div>
  )}