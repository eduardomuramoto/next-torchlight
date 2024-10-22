
import FacilitatorCard from "../Cards/facilitatorCard";


export default function FacilitatorsSection({facilitatorsArr}:{facilitatorsArr:any[]}) {
  return (
    <div className="bg-extraLightForeground w-full p-10 px-20 flex flex-col gap-8 row-start-2">
     <div className="w-2/3">
      <h2 className="font-teko text-5xl uppercase font-semibold pb-6 text-background">Our Facilitators</h2>
        <div className="flex flex-wrap justify-start gap-10">
      {/* {course.facilitators.data.map((facilitator)=> {return <FacilitatorCard  */}
      {facilitatorsArr.map((facilitator)=> {return <FacilitatorCard 
        facilitator={facilitator.attributes.Name}
        description={facilitator.attributes.Description}
        />})}
        </div>
      </div>
    </div>
  )}