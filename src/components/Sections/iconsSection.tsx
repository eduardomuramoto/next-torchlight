import IconCard from "../Cards/iconCard";

const services = [
  {
    Icon: "court-support",
    Title: "Court Support"
  },
  {
    Icon: "education",
    Title: "Education for All"
  },
  {
    Icon: "finance",
    Title: "Financial Support"
  },
  {
    Icon: "counselling",
    Title: "Counselling"
  },
  {
    Icon: "security",
    Title: "Security, Health & Wellbeing"
  },
  {
    Icon: "crisis",
    Title: "Crisis & Court Support"
  },
  {
    Icon: "caring-hands",
    Title: "Child Support"
  },
  {
    Icon: "housing-support",
    Title: "Housing Support"
  },

]


export default function IconsSection({ title, paragraphs, style = "orange", idName, blueTitle = false, bgWhite = false }:
  { title: string, paragraphs: string[], style?: string, idName?: string, alignTop?: boolean, blueTitle?: boolean, bgWhite?: boolean }) {
  const bgColor = style === "orange" ? (bgWhite ? "bg-white" : "bg-lightForeground") : "bg-redBackground";
  const titleColor = style === "orange" ? (blueTitle ? "text-background" : "text-foreground") : "text-background";

  return (
    <div id={idName ? idName : ""}
      className={bgColor + " w-full gap-10 lg:gap-20 p-16 lg:px-36"}>
      <h1 className={titleColor + " font-teko text-6xl text-center uppercase font-semibold pb-6"}>{title}</h1>
      <div className="text-center w-2/3 mx-auto">

        {paragraphs ? paragraphs.map((paragraph) => {
          return (<p className="text-gray-800 pb-4" key={paragraph}>{paragraph}</p>)
        })
          :
          <></>
        }
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-start gap-10">
        {services.map((service) => {
          return <IconCard
            key={service.Icon}
            folder="about"
            icon={service.Icon}
            objective={service.Title} />
        })}
      </div>
    </div>
  )
}