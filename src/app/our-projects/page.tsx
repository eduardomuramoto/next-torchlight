import ProjectCard from "@/components/Cards/projectCard";
import JusticeRadioHeader from "@/components/Sections/justiceRadioSection";
import CafePhoto from "@images/CAFE_Project.jpg"
import DandelionPhoto from "@images/Dandelion_Project.jpg"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Torchlight Foundation",
  description: "Shining light for a better future",
};

export default function OurProjectsPage() {

  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className={"bg-lightForeground w-full flex flex-wrap lg:flex-nowrap gap-10 lg:gap-20 p-16 lg:px-36"}>
          <div className="w-full mx-auto">
            <div className={" w-full items-center flex flex-col mx-auto"}>
              <h1 className={"font-teko text-6xl text-center uppercase font-semibold pb-6 text-background lg:w-2/3"}>Our Projects</h1>
              <p className="text-gray-900 text-center lg:w-2/3">Torchlight Foundation is actively involved in raising awareness, providing support, and advocating for systemic changes to combat domestic violence. Through our various projects, including the CAFE Project, The Dandelion Project and Justice Radio, we aim to make a tangible impact on the lives of those affected.</p>
              <div className="gap-8 mt-6">
                <ProjectCard
                  imageUrl={CafePhoto}
                  title="The CAFE Project"
                  description="The CAFE Project creates a welcoming space for individuals to connect, share stories, and find support, mirroring the warmth and comfort of a cafe. It fosters meaningful conversations that contribute to a community where everyone feels heard and empowered."
                />
                <ProjectCard
                  imageUrl={DandelionPhoto}
                  title="The Dandelion Project"
                  description="The Dandelion Project, with its tender care, nurtures the resilience of children affected by domestic violence, aiming to cultivate a future free from the shadows of abuse. We support and help kids to rebuild themselves and their lives."
                />
              </div>
            </div>
          </div>
        </div>
        <JusticeRadioHeader />
      </main>

    </div>
  );
}
