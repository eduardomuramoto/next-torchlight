import BookingCourse from "@/components/Sections/bookingCourse";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Get Support | Torchlight Foundation",
  description: "Shining light for a better future",
};


export default function BookingCoursePage() {


  return (
    <div className="">
      <BookingCourse />

    </div>
  );
}
