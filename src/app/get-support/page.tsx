import EnquirySection from "@/components/ ContactSection/enquiry";
import CourseCard from "@/components/Cards/courseCard";
import ServiceCard from "@/components/Cards/serviceCard";
import CoursesSection from "@/components/Sections/CourseSection";
import JumboHeader from "@/components/Sections/pageJumboHeader";
import SubNavBar from "@/components/Sections/pageSubNavBar";



export default function GetSupportPage() {
 
  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <JumboHeader subTitle="Get Support" title="Our Programmes & Services"/>
        <SubNavBar />
        <CoursesSection />
        
        <div className="bg-extraLightForeground w-full p-10 px-20 flex flex-col gap-8 row-start-2">
          <h2 className="font-teko text-5xl uppercase font-semibold pb-6 text-background">Our Services</h2>
          <div className="flex flex-wrap justify-between gap-10">
            <ServiceCard title="Counselling" description="Our experienced  professionals offer guidance and support for personal growth and  healing."/>
            <ServiceCard title="Advocacy" description="We support and advocate for women affected by domestic violence through various essential services."/>
            <ServiceCard title="Legal Consultation" description="We offer professional legal consultation services to guide you through your legal matters with expertise and care."/>
          </div>
        </div>
        <EnquirySection/>
      </main>
      
    </div>
  );
}
