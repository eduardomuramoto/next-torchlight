import EnquirySection from "@/components/Forms/enquiry";
import CoursesSection from "@/components/Sections/CourseSection";
import JumboHeader from "@/components/Sections/pageJumboHeader";
import SubNavBar from "@/components/Sections/pageSubNavBar";
import ServicesSection from "@/components/Sections/ServicesSection";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Get Support | Torchlight Foundation",
  description: "Shining light for a better future",
};
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
        <SubNavBar Links={[
          { url: "#courses", label: "Courses" },
          { url: "#services", label: "Services" },
          { url: "#enquiry", label: "Enquiry" },
        ]} />
        <CoursesSection />
        <ServicesSection />
        <EnquirySection />
      </main>

    </div>
  );
}
