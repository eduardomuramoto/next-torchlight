"use client"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import ServiceCard from "../Cards/serviceCard";
import { Service } from "@/interfaces/service.interface";
import { useState, useEffect } from "react";

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_CMS_GRAPHQL}`,
  cache: new InMemoryCache(),
  credentials: 'include'
});

export default function ServicesSection() {
  const [servicesArr, setServicesArr] = useState<Service[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const result = await client.query({
          query: gql`
            query Services {
      services{
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
    }
          `,
        });
        setServicesArr(result.data.services.data.map((item: { attributes: Service }) => item.attributes))
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div className="bg-extraLightForeground w-full p-10 px-6 sm:px-20 flex flex-col gap-8 row-start-2" id="services">
      <h2 className="font-teko text-5xl uppercase font-semibold pb-6 text-background">Our Services</h2>
      <div className="flex flex-wrap justify-between gap-10">
        {servicesArr?.map((service) => {
          return (<ServiceCard
            key={service.slug}
            slug={service.slug}
            icon={service.ServiceIcon}
            title={service.Name}
            price={service.Price}
            description={service.Description} />)
        })}
      </div>
    </div>
  )
}