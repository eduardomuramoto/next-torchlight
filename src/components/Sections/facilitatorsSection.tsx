
import FacilitatorCard from "../Cards/facilitatorCard";

type facilitator = {
  attributes: {
    Name: string,
    Description: string
  }
}


export default function FacilitatorsSection({ facilitatorsArr }: { facilitatorsArr: facilitator[] }) {
  return (
    <div className="bg-extraLightForeground w-full p-10 sm:px-20 flex flex-col gap-8 row-start-2">
      <div className="lg:w-2/3">
        <h2 className="font-teko text-5xl uppercase font-semibold pb-6 text-background">Our Facilitators</h2>
        <div className="grid md:grid-cols-2 justify-start gap-10 md:gap-0">
          {/* {course.facilitators.data.map((facilitator)=> {return <FacilitatorCard  */}
          {facilitatorsArr.map((facilitator) => {
            return <FacilitatorCard
              key={facilitator.attributes.Name}
              facilitator={facilitator.attributes.Name}
              description={facilitator.attributes.Description}
            />
          })}
        </div>
      </div>
    </div>
  )
}