import EnquirySection from "@/components/ ContactSection/enquiry";
import CourseCard from "@/components/Cards/courseCard";
import ServiceCard from "@/components/Cards/serviceCard";
import CoursesSection from "@/components/Sections/CourseSection";
import HomeJumboHeader from "@/components/Sections/homeJumboHeader";
import JusticeRadioHeader from "@/components/Sections/justiceRadioSection";
import OverlapSection from "@/components/Sections/OverlapSection";
import SubNavBar from "@/components/Sections/pageSubNavBar";
import volunteerPhoto from "@images/Volunteer.jpg"



export default function Home() {
 
  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <HomeJumboHeader/>
        <OverlapSection
          reverse={true}
          style="red"
          smallPicture={true}
          subTitle="Be a part of the solution!" 
          title="Become A Volunteer" 
          imgUrl={volunteerPhoto}
          paragraphs={[
            " Join us in making a difference in the lives of survivors of domestic violence. "
                      ]} 
        />
        <JusticeRadioHeader/>

        
    
      </main>
      
    </div>
  );
}
