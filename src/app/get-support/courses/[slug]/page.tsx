import SingleCourse from "@/components/Sections/singleCourse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Support | Torchlight Foundation",
  description: "Shining light for a better future",
};

export default function CoursePage() {


  return (
    <div className="">
      <SingleCourse />
    </div>
  );
}
