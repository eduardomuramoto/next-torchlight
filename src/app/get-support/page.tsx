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
        <JumboHeader 
        subTitle="Get Support" 
        title="Our Programmes & Services"
        paragraphs={[
          "At Torchlight Foundation, our mission is to provide education and resources to support mental health and wellness in our community.",
          "We offer a variety of programmes and services to support mental health, including counselling, support groups, and educational workshops.",
          "Over the past year, we have helped over 1,000 individuals in our community improve their mental health and well-being."
        ]}
        />
        <SubNavBar />
        <CoursesSection />
        
        <div className="bg-extraLightForeground w-full p-10 px-20 flex flex-col gap-8 row-start-2" id="services">
          <h2 className="font-teko text-5xl uppercase font-semibold pb-6 text-background">Our Services</h2>
          <div className="flex flex-wrap justify-between gap-10">
            <ServiceCard icon="counselling" title="Counselling" description="Our experienced  professionals offer guidance and support for personal growth and  healing."/>
            <ServiceCard icon="advocacy" title="Advocacy" description="We support and advocate for women affected by domestic violence through various essential services."/>
            <ServiceCard icon="legal" title="Legal Consultation" description="We offer professional legal consultation services to guide you through your legal matters with expertise and care."/>
          </div>
        </div>
        <EnquirySection/>
      </main>
      
    </div>
  );
}
