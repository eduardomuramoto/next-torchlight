
import JumboHeader from "@/components/Sections/pageJumboHeader";




export default function OurProjectsPage() {
 
  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <JumboHeader 
        alignTop={false}
        subTitle="Our Projects" 
        title="Our Programmes & Services"
        paragraphs={[
          "We have several projects to help women, kids, and families that are dealing with domestic violence. These projects weave a tapestry of compassion, education, and advocacy, illuminating paths toward a society that stands united against domestic violence. ",
          "The Torchlight Foundation is committed to creating lasting change through a range of initiatives that empower survivors, raise awareness, and prevent future harm."
        ]}
        />
      
      </main>
      
    </div>
  );
}
