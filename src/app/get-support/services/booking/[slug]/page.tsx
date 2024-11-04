"use client"
import BlueButton from "@/components/Buttons/blueButton";
import { Service } from "@/interfaces/service.interface";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";

// import CourseCard from "../Cards/courseCard";

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_CMS_GRAPHQL}`,
  cache: new InMemoryCache(),
});

// Query
const COURSE_QUERY = gql`query Course($slug: String!) {
    services(filters: {slug: {eq:$slug}}) {
       data{
            attributes{
              Name
              Price
              Description
              ServiceIcon
              slug
            }
          }
    }
}`;


// Define the shape of the form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  servicePrice: number;
  serviceName: string;
}

// Define the shape of the status message
interface StatusMessage {
  message: string;
  type: "success" | "error" | ""; // Possible types for the status message
}



export default function BookingServicePage() {
  const params = useParams();
  const [service, setService] = useState<Service>()
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    serviceName: "",
    servicePrice: 0,
  });

  const [statusMessage, setStatusMessage] = useState<StatusMessage>({
    message: "",
    type: "",
  });

  useEffect(() => {
    client
      .query({
        query: COURSE_QUERY,
        variables: {
          slug: params.slug,
        }
      })
      .then((result) => {
        // console.log("Result",result)
        setService(result.data.services.data[0].attributes)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          serviceName: result.data.services.data[0].attributes.Name,
          servicePrice: parseInt(result.data.services.data[0].attributes.Price),
        });
        setLoading(false)
      })
  }, [params.slug, service])

  if (isLoading) return <p>Loading...</p>
  if (!service) return <p>No service data</p>



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    e.stopPropagation();
    setStatusMessage({ message: "Sending Email...", type: "" }); // Reset message before submission

    try {
      const response = await fetch("/api/bookServiceEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setStatusMessage({
        message: "Email sent successfully!",
        type: "success",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        serviceName: service.Name,
        servicePrice: service.Price,
      }); // Clear form fields
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage({
        message: "Error sending email. Please try again later.",
        type: "error",
      });
    }
  };

  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="relative w-full p-10 px-20 bg-white">
          <form onSubmit={handleSubmit} className="grid lg:grid-cols-3">
            <div className="relative overflow-hidden flex flex-col p-6 bg-white border-2 border-background text-background font-semibold rounded-md">
              <h2 className="text-2xl pb-6 font-semibold text-background uppercase font-teko" >Your Service</h2>
              <h1 className="text-4xl font-semibold text-foreground uppercase font-teko" >{service.Name}</h1>

              <p className="text-start text-gray-800 font-normal pb-2">{service.Description}</p>


              <p className="pt-10 text-sm font-medium"><span className="text-2xl font-bold">Total: {"$" + (service.Price)}</span></p>

            </div>
            <div className="p-6 px-10 lg:border-r-2">
              <h2 className="text-2xl pb-6 font-semibold text-background uppercase font-teko" >Details</h2>

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
              <div className="pb-6">
                <label className="text-background font-semibold" htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  rows={8}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-foreground focus:outline-none focus:ring"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Hidden input */}
              <input
                type="hidden"
                name="servicePrice"
                value={formData.servicePrice}
              />
              <input
                type="hidden"
                name="serviceName"
                value={formData.serviceName}
              />
              <BlueButton label="Book Service" isSubmit={true} />
              <p className="pt-2 text-xs text-gray-600">*By clicking  &quot;Book Service&quot;, you agree to our T&Cs</p>
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
