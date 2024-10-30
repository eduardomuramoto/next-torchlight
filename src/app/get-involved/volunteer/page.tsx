import JumboHeader from "@/components/Sections/pageJumboHeader";
import getInvolvedPhoto from "@images/get_involved.jpg"
import VolunteerFormSection from "@/components/ ContactSection/volunteerForm";




export default function VolunteerPage() {

  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <JumboHeader
          alignTop={false}
          title="Become a volunteer"
          imgUrl={getInvolvedPhoto}
          paragraphs={["Volunteers are essential to the Torchlight Foundation, driving meaningful change in communities by supporting survivors of domestic violence, advocating for change, and promoting awareness. We welcome individuals from all walks of life who are passionate about making a difference and creating safer, more compassionate communities."
          ]}
        />

        <VolunteerFormSection />
      </main>

    </div>
  );
}
