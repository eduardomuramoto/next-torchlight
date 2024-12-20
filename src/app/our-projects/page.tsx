import JusticeRadioHeader from "@/components/Sections/justiceRadioSection";
import ProjectsHeader from "@/components/Sections/projectsHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Torchlight Foundation",
  description: "Shining light for a better future",
};

export default function OurProjectsPage() {

  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <ProjectsHeader />
        <JusticeRadioHeader />
      </main>

    </div>
  );
}
