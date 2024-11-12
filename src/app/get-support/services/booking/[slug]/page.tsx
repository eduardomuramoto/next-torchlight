import BookingService from "@/components/Sections/bookingService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Support | Torchlight Foundation",
  description: "Shining light for a better future",
};

export default function BookingServicePage() {

  return (
    <div className="">
      <BookingService />
    </div>
  );
}
