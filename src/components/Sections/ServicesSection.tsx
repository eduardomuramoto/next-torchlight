import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import CourseCard from "../Cards/courseCard";
import ServiceCard from "../Cards/serviceCard";

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_CMS_GRAPHQL}`,
  cache: new InMemoryCache(),
});
let servicesArr: any[];
await client
  .query({
    query: gql`query Services {
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
    }`,
  })
  .then((result) => { servicesArr = result.data.services.data})
  // .then((result) => { console.log(result.errors) });

  // 
  export default function ServicesSection() {
  console.log(servicesArr)
  return (
    <div className="bg-extraLightForeground w-full p-10 px-20 flex flex-col gap-8 row-start-2" id="services">
    <h2 className="font-teko text-5xl uppercase font-semibold pb-6 text-background">Our Services</h2>
    <div className="flex flex-wrap justify-between gap-10">
    {servicesArr?.map((service)=>{
      return (<ServiceCard 
        key={service.attributes.slug} 
        slug={service.attributes.slug} 
        icon={service.attributes.ServiceIcon} 
        title={service.attributes.Name} 
        price={service.attributes.Price}
        description={service.attributes.Description}/>)
    })}
    </div>
  </div>
  )}