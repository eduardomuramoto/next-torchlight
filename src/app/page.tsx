import BlueButton from "@/components/Buttons/blueButton";
import BlueOutlineButton from "@/components/Buttons/blueOutlineButton";
import OrangeButton from "@/components/Buttons/orangeButton";
import OutlineButton from "@/components/Buttons/outlineButton";
import CourseCard from "@/components/Cards/courseCard";
import ServiceCard from "@/components/Cards/serviceCard";


export default function Home() {
  return (
    <div className="">
      <main className="bg-white p-10 flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h2>Buttons</h2>
          <BlueButton label="Button"/>
          <OrangeButton/>
          <BlueOutlineButton label="Arrow Button" afterIcon="yes"/>
          <BlueOutlineButton label="Arrow Button" beforeIcon="yes"/>
          <OutlineButton/>
        </div>
        <div className="flex flex-col gap-8 row-start-2">
          <h2>Course Cards</h2>
          <div className="flex flex-wrap justify-between gap-10">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
          </div>
        </div>
        <div className="flex flex-col gap-8 row-start-2 w-full">
          <h2>Service Cards</h2>
          <div className="flex flex-wrap justify-between gap-10">
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
          </div>
        </div>
      </main>
      
    </div>
  );
}
