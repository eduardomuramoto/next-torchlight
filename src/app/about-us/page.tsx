import EnquirySection from "@/components/ ContactSection/enquiry";
import JumboHeader from "@/components/Sections/pageJumboHeader";
import jumboPhoto from "@images/About_Us.webp"



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
      
        <EnquirySection/>
      </main>
      
    </div>
  );
}
