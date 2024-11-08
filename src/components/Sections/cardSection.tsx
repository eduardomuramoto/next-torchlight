
import GetSupportCard from "../Cards/getSupportCard";


const cards = [
  {
    title: "Courses",
    description: "Comprehensive courses offering essential education on recognizing, understanding, empowering individuals and communities to foster safer, more supportive environments",
    slug: "/get-support#courses",
  },
  {
    title: "Services",
    description: "A suite of supportive services including counseling, advocacy, and legal consultation, dedicated to guiding and empowering individuals impacted by domestic violence.",
    slug: "/get-support#services",
  },
  {
    title: "Enquiry",
    description: "Have any questions? We're here to help. Use our inquiry form, and we'll gladly guide you through any details about our courses and support services.",
    slug: "/get-support#enquiry",
  },

]


export default function CardsSection({ title, paragraphs, style = "orange", idName, blueTitle = false, bgWhite = false }:
  { title: string, paragraphs: string[], style?: string, idName?: string, alignTop?: boolean, blueTitle?: boolean, bgWhite?: boolean }) {
  const bgColor = style === "orange" ? (bgWhite ? "bg-white" : "bg-lightForeground") : "bg-redBackground";
  const titleColor = style === "orange" ? (blueTitle ? "text-background" : "text-foreground") : "text-background";

  return (
    <div id={idName ? idName : ""}
      className={bgColor + " w-full gap-10 lg:gap-20 p-16 px-6 lg:px-36"}>
      <h1 className={titleColor + " font-teko text-6xl text-center uppercase font-semibold pb-6"}>{title}</h1>
      <div className="text-center sm:w-2/3 mx-auto">

        {paragraphs ? paragraphs.map((paragraph) => {
          return (<p className="text-gray-800 pb-4" key={paragraph}>{paragraph}</p>)
        })
          :
          <></>
        }
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
        {cards.map((card) => {
          return <GetSupportCard
            key={card.slug}
            title={card.title}
            description={card.description}
            slug={card.slug}
          />
        })}
      </div>
    </div>
  )
}