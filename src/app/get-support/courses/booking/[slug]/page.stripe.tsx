"use client"
import BlueButton from "@/components/Buttons/blueButton";
import ClockComponent from "@/components/Icons/clock";
import ComputerComponent from "@/components/Icons/computer";
import InPersonComponent from "@/components/Icons/inPerson";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { Course } from "@/interfaces/course.interface";
import { loadStripe } from '@stripe/stripe-js';

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_CMS_GRAPHQL}`,
  cache: new InMemoryCache(),
});

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const COURSE_QUERY = gql`
  query Course($slug: String!) {
    courses(filters: {slug: {eq:$slug}}) {
      data {
        id
        attributes {
          CourseName
          courseCode
          Price
          Location
          slug
          courseDuration {
            ...on ComponentCourseComponentsDuration {
              unit
              value
            }
          }
        }
      }
    }
  }
`;

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  quantity: number;
  groupClasses: boolean;
  coursePrice: number;
  courseName: string;
  courseCode: string;
}

interface StatusMessage {
  message: string;
  type: "success" | "error" | "";
}

export default function BookingCoursePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const groupClasses = searchParams.get("groupClasses") === "true";
  const [course, setCourse] = useState<Course>();
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    quantity: 1,
    groupClasses: false,
    courseName: "",
    courseCode: "",
    coursePrice: 0,
  });

  const [statusMessage, setStatusMessage] = useState<StatusMessage>({
    message: "",
    type: "",
  });

  useEffect(() => {
    client
      .query({
        query: COURSE_QUERY,
        variables: { slug: params.slug },
      })
      .then((result) => {
        const courseData = result.data.courses.data[0].attributes;
        setCourse(courseData);
        setFormData((prev) => ({
          ...prev,
          groupClasses,
          courseName: courseData.CourseName,
          courseCode: courseData.courseCode,
          coursePrice: parseInt(courseData.Price),
        }));
        setLoading(false);
      });
  }, [params.slug, groupClasses]);

  if (isLoading) return <p>Loading...</p>;
  if (!course) return <p>Loading...</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setStatusMessage({ message: "Redirecting to payment...", type: "" });

    try {
      const response = await fetch("/api/courseCheckout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to create Stripe session");

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      console.log(error);
      setStatusMessage({ message: "Error creating Stripe session. Try again later.", type: "error" });
    }
  };

  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="relative w-full p-10 md:px-20 bg-white">
          <form onSubmit={handleSubmit} className="grid lg:grid-cols-3">
            <div className="relative overflow-hidden flex flex-col p-6 bg-white border-2 border-background text-background font-semibold rounded-md">
              <h2 className="text-2xl pb-6 font-semibold text-background uppercase font-teko" >Your Course</h2>
              <h1 className="text-3xl sm:text-4xl font-semibold text-foreground uppercase font-teko" >{course.CourseName}</h1>
              <p className="pb-6">{"#" + course.courseCode.replace("_", "-")}</p>

              <p className="flex text-gray-600 text-sm items-center pr-2"><span className="pr-1"><ClockComponent /></span>{course.courseDuration.value + " " + course.courseDuration.unit + (course.courseDuration.value > 1 ? "s" : "")}</p>

              {location?.includes("in-person") ? (<p className="flex text-gray-600 text-sm items-center pr-2"><span className="pr-1"><InPersonComponent /></span> In-Person</p>) : ""}
              {location?.includes("online") ? (<p className="flex text-gray-600 text-sm items-center pr-2"><span className="pr-1"><ComputerComponent /></span> Online</p>) : ""}
              {groupClasses ? (<p className="flex text-gray-600 text-sm items-center pr-2">Booking for Group Classes</p>) : ""}

              <p className="pt-10 text-sm font-medium"><span className="text-2xl font-bold">Total: {"$" + (parseInt(course.Price) * formData.quantity)}</span> {"($" + course.Price + " per person)"}</p>

            </div>
            <div className="p-6 md:px-10 lg:border-r-2">
              <h2 className="text-2xl pb-6 font-semibold text-background uppercase font-teko" >Details</h2>
              <div className="pb-2">
                <label className="text-background font-semibold" htmlFor="quantity">Number Of Attendees *</label>
                <input
                  id="quantity"
                  type="number"
                  min="1" max="20"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-foreground focus:outline-none focus:ring"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="pb-2">
                <label className="text-background font-semibold" htmlFor="name">Your Name *</label>
                <input
                  id="name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-foreground focus:outline-none focus:ring"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="pb-2">
                <label className="text-background font-semibold" htmlFor="email">Your Email *</label>
                <input
                  id="email"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-foreground focus:outline-none focus:ring"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="pb-6">
                <label className="text-background font-semibold" htmlFor="phone">Phone *</label>
                <input
                  id="phone"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-foreground focus:outline-none focus:ring"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="p-6 mt-auto">
              {/* <h2 className="text-2xl pb-6 font-semibold text-background uppercase font-teko" >Details</h2> */}
              <div className="pb-10">
                {/* <label className="flex text-gray-600 text-sm items-center pr-2">
                <input
                  type="checkbox"
                  name="groupClasses"
                  checked={formData.groupClasses}
                  onChange={handleChange}
                />
                Subscribe to Torchlight Foundation’s newsletter
              </label> */}
                <label className="text-background font-semibold" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={8}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-foreground focus:outline-none focus:ring"
                  value={formData.message}
                  onChange={handleChange}
                />
                {/* Hidden input */}
                <input
                  type="hidden"
                  name="coursePrice"
                  value={formData.coursePrice}
                />
                <input
                  type="hidden"
                  name="groupClasses"
                  checked={formData.groupClasses}
                />
                <input
                  type="hidden"
                  name="courseName"
                  value={formData.courseName}
                />
                <input
                  type="hidden"
                  name="courseCode"
                  value={formData.courseCode}
                />
              </div>
              <BlueButton label="Book Course" isSubmit={true} />
              <p className="pt-2 text-xs text-gray-600">*By clicking  &quot;Book Course&quot;, you agree to our T&Cs</p>
            </div>

          </form>
          {/* Status Message */}
          {statusMessage.message && (
            <div className={`mt-4 text-lg ${statusMessage.type === "success" ? "text-green-600" : "text-red-600"}`}>
              {statusMessage.message}
            </div>
          )}
        </div>
      </main>

    </div>
  );
}
