import EnquirySection from "@/components/ ContactSection/enquiry";
import JumboHeader from "@/components/Sections/pageJumboHeader";
import SubNavBar from "@/components/Sections/pageSubNavBar";
import jumboPhoto from "@images/About_Us.webp"
import missionPhoto from "@images/our_mission.jpg"
import visionPhoto from "@images/our_vision.jpg"



export default function GetSupportPage() {
 
  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <JumboHeader 
          alignTop={false}
          subTitle="About Us" 
          title="Our Mission" 
          imgUrl={jumboPhoto} 
          paragraphs={["At Torchlight Foundation, our mission is to provide multifaceted support to victim survivors of domestic and family violence, assault, and child sexual abuse. We understand that domestic abuse is a complex and contentious issue often surrounded by myths and misconceptions. However, we exist not only to end it but also to promote healthy families and relationships built on the foundations of kindness and respect."]}
        />
          <SubNavBar Links={[
          {url:"#CEO",label:"CEO & Founder"},
          {url:"#what-we-do",label:"What We Do"},
          {url:"#our-mission",label:"Our Mission"},
          {url:"#our-vision",label:"Our Vision"},
        ]}/>
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
        <EnquirySection/>
      </main>
      
    </div>
  );
}
