import EnquirySection from "@/components/ ContactSection/enquiry";
import OverlapSection from "@/components/Sections/OverlapSection";
import JumboHeader from "@/components/Sections/pageJumboHeader";
import volunteerPhoto from "@images/Volunteer.jpg"
import donatePhoto from "@images/donate.webp"




export default function VolunteerPage() {

  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <JumboHeader
          alignTop={false}
          subTitle="Get Involved"
          title="VOLUNTEER"
          imgUrl={volunteerPhoto}
          paragraphs={["Join us in making a difference in the lives of survivors of domestic violence. Volunteer with our DV service and help provide support, empowerment, and resources to those in need.",
            "Together, we can create a safe and nurturing environment for survivors to heal and rebuild their lives. Whether you have a few hours to spare or are looking for a long-term commitment, your time and dedication can make a significant impact.",
            "Join our team of compassionate volunteers today and be a part of the solution.",
            "Together, let's break the cycle of domestic violence and create a brighter future for all."
          ]}
          button={{ label: "Become a volunteer", url: "/get-involved/volunteer" }}
        />
        {/* <OverlapSection
          style="red"
          subTitle="Donate" 
          title="Support us financially on our mission to end abuse." 
          imgUrl={donatePhoto}
          paragraphs={[
            "Shine a light on hope — help us break the cycle of domestic violence. Your donation to the Torchlight Foundation empowers survivors and ignites a future of safety and healing."
                      ]} 
        /> */}
        <OverlapSection
          reverse={true}
          style="red"
          subTitle="Donate"
          title="Support us financially on our mission to end abuse."
          imgUrl={donatePhoto}
          paragraphs={[
            "Shine a light on hope — help us break the cycle of domestic violence. Your donation to the Torchlight Foundation empowers survivors and ignites a future of safety and healing."
          ]}
        />

        <EnquirySection />
      </main>

    </div>
  );
}
