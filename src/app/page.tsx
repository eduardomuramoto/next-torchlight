import HomeJumboHeader from "@/components/Sections/homeJumboHeader";
import CardsSection from "@/components/Sections/cardSection";
import OverlapSection from "@/components/Sections/OverlapSection";
import volunteerPhoto from "@images/Volunteer.jpg"
import JusticeRadioHeader from "@/components/Sections/justiceRadioSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Torchlight Foundation",
  description: "Shining light for a better future",
};

export default function Home() {

  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <HomeJumboHeader />
        <CardsSection
          bgWhite={true}
          idName="get-support"
          title="Get Support"
          blueTitle={true}
          paragraphs={["We're on a mission to provide comprehensive support to survivors of domestic violence, assault, and child sexual abuse. We aim not only to end these issues but also to foster healthy families and relationships founded on kindness and respect."]}
        />
        <ProjectsSection
          blueTitle={true}
          title="Our Projects"
          paragraphs={["At Torchlight Foundation, we understand the challenges you may be facing, and we are here to support you. Our mission is to raise awareness about domestic violence and provide compassionate assistance to those in need. Through our initiatives like the CAFE Project and The Dandelion Project, we create welcoming spaces where you can find resources and support tailored to your unique situation. We encourage open conversations, helping you feel heard and empowered as you take steps toward healing and rebuilding your life.",
            "We also advocate for the systemic changes necessary to create a safer environment for all. Our program, Justice Radio, shares stories and insights that uplift voices often silenced, fostering understanding and community support. At Torchlight Foundation, we are committed to making a tangible impact in the lives of individuals and families affected by domestic violence. You are not alone in this journey; together, we can work towards a future filled with hope, safety, and the possibility of a brighter tomorrow."]}
        />
        <JusticeRadioHeader />
        <OverlapSection
          reverse={true}
          style="red"
          smallPicture={true}
          subTitle="Be a part of the solution!"
          title="Become A Volunteer"
          imgUrl={volunteerPhoto}
          label="Join Us"
          url="/get-involved/volunteer"
          paragraphs={[
            " Join us in making a difference in the lives of survivors of domestic violence by volunteering with our dedicated service. You can provide vital support, empowerment, and resources to those in need, helping them rebuild their lives with dignity and hope. Whether you have a few hours to spare or are looking for a longer commitment, your time can create a lasting impact. Be part of our compassionate team today and help us break the cycle of domestic violence, fostering a brighter, safer future for all. "
          ]}
        />





      </main>

    </div>
  );
}
