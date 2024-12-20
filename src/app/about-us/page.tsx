import EnquirySection from "@/components/Forms/enquiry";
import CeoSection from "@/components/Sections/ceoSection";
import IconsSection from "@/components/Sections/iconsSection";
import JumboHeader from "@/components/Sections/pageJumboHeader";
import SubNavBar from "@/components/Sections/pageSubNavBar";
import jumboPhoto from "@images/About_Us.webp"
import missionPhoto from "@images/our_mission.jpg"
import visionPhoto from "@images/our_vision.jpg"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Torchlight Foundation",
  description: "Shining light for a better future",
};

export default function GetSupportPage() {

  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <JumboHeader
          alignTop={false}
          subTitle="About Us"
          title="Shining light for a brighter future"
          imgUrl={jumboPhoto}
          paragraphs={["Torchlight Foundation is committed to driving positive change against domestic violence by challenging the status quo and envisioning a safer future for all. We foster a culture of respect and compassion through education, advocacy, and support. Together, we strive to create a more united and compassionate society."]}
        />
        <SubNavBar Links={[
          { url: "#CEO", label: "CEO & Founder" },
          { url: "#what-we-do", label: "What We Do" },
          { url: "#our-mission", label: "Our Mission" },
          { url: "#our-vision", label: "Our Vision" },
        ]} />
        <CeoSection
          title="CEO & Founder"
          subTitle="Shine bright, and know that you are never alone."
          paragraphs={[
            "Our journey has been inspired by the resilience of survivors and your unwavering support. It's your commitment that allows us to work towards a future where abuse is preventable, survivors are met with compassion, and communities are empowered to drive transformation. I invite you to join us in making a lasting difference for those who need it most. Thank you for being a part of our Torchlight family.",
            'In my own life, I experienced the harsh reality of an abusive marriage, which has shaped my mission today: Saving Survivors. Sharing my story of domestic violence has given me a deep understanding of the struggles many face. "If it could happen to me, it could happen to any of us, " is a truth that echoes throughout my journey. Making the decision to break free wasn’t easy, but it led me to launch the Torchlight Foundation. We stand with every survivor, supporting you every step of the way.'
          ]}
        />
        <IconsSection
          idName="what-we-do"
          title="What We Do"
          blueTitle={true}
          paragraphs={["we are dedicated to inspiring and empowering families and communities. By fostering advocacy and promoting positive changes in societal attitudes, culture, and policies, we strive to break the cycle of abuse and create a future where everyone can thrive in a safe and supportive environment."]}
        />
        <JumboHeader
          idName="our-mission"
          bgWhite={true}
          blueTitle={true}
          alignTop={false}
          title="Our Mission"
          imgUrl={missionPhoto}
          paragraphs={["At Torchlight Foundation, we are committed to cultivating a culture of respect and compassion. We work to foster safe, stable, and caring relationships for both adults and children, with the ultimate goal of eradicating all forms of abuse, including domestic violence, child sexual abuse, discrimination, and bullying.",
            "By empowering individuals and communities with knowledge and inspiration, we aim to drive transformative shifts in societal attitudes, culture, and policies. Through greater awareness and advocacy, we envision a future where everyone feels safe, valued, and free from the impacts of abuse. Together, we can break the cycle and build a more compassionate society."
          ]}
        />
        <JumboHeader
          idName="our-vision"
          blueTitle={true}
          alignTop={false}
          reverse={true}
          title="Our Vision"
          imgUrl={visionPhoto}
          paragraphs={["We envision a world where every individual, regardless of age or background, lives free from violence, discrimination, and fear. A society built on compassion, respect, and understanding, where families and communities can thrive in environments that nurture their well-being.",
            "Through education, advocacy, and transformative initiatives, we strive to break the cycle of abuse. Our vision is to create a future where everyone has the opportunity to flourish in a safe, supportive world—one where empathy and equality are the foundation of lasting change for generations to come."
          ]}
        />
        <EnquirySection />
      </main>

    </div>
  );
}
