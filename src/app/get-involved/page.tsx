import EnquirySection from "@/components/Forms/enquiry";
import OverlapSection from "@/components/Sections/OverlapSection";
import JumboHeader from "@/components/Sections/pageJumboHeader";
import volunteerPhoto from "@images/Volunteer.jpg"
import donatePhoto from "@images/donate.webp"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | Torchlight Foundation",
  description: "Shining light for a better future",
};

export default function GetInvolvedPage() {

  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <JumboHeader
          alignTop={false}
          subTitle="Get Involved"
          title="Become A Volunteer"
          imgUrl={volunteerPhoto}
          paragraphs={["Join us in making a difference in the lives of survivors of domestic violence. Volunteer with our DV service and help provide support, empowerment, and resources to those in need.",
            "Together, we can create a safe and nurturing environment for survivors to heal and rebuild their lives. Whether you have a few hours to spare or are looking for a long-term commitment, your time and dedication can make a significant impact.",
            "Join our team of compassionate volunteers today and be a part of the solution.",
            "Together, let's break the cycle of domestic violence and create a brighter future for all."
          ]}
          button={{ label: "Join Us", url: "/get-involved/volunteer" }}
        />
        <OverlapSection
          reverse={true}
          style="red"
          subTitle="Donate"
          title="Support us financially on our mission to end abuse."
          imgUrl={donatePhoto}
          label="Donate"
          url="https://www.torchlight.org.au/donation"
          targetBlank={true}
          paragraphs={[
            "Shine a light on hope — help us break the cycle of domestic violence. Your donation to the Torchlight Foundation empowers survivors and ignites a future of safety and healing."
          ]}
        />

        <EnquirySection />
      </main>

    </div>
  );
}
