import Link from "next/link";
import BlueButton from "../Buttons/blueButton";


export default function ProjectsSection({ title, paragraphs, style = "orange", idName, blueTitle = false, bgWhite = false }:
  { title: string, paragraphs: string[], style?: string, idName?: string, alignTop?: boolean, blueTitle?: boolean, bgWhite?: boolean }) {
  const bgColor = style === "orange" ? (bgWhite ? "bg-white" : "bg-lightForeground") : "bg-redBackground";
  const titleColor = style === "orange" ? (blueTitle ? "text-background" : "text-foreground") : "text-background";

  return (
    <div id={idName ? idName : ""}
      className={bgColor + " w-full gap-10 lg:gap-20 p-16 md:px-20 lg:px-36"}>
      <h1 className={titleColor + " font-teko text-6xl text-center uppercase font-semibold pb-6"}>{title}</h1>
      <div className="text-center lg:w-2/3 mx-auto">

        {paragraphs ? paragraphs.map((paragraph) => {
          return (<p className="text-gray-800 pb-4" key={paragraph}>{paragraph}</p>)
        })
          :
          <></>
        }
        <Link href="/our-projects" className="flex justify-center pt-6">
          <BlueButton label="Learn More" />
        </Link>
      </div>
    </div>
  )
}