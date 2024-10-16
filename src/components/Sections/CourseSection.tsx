import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import CourseCard from "../Cards/courseCard";

const client = new ApolloClient({
  uri: `${process.env.CMS_GRAPHQL}`,
  cache: new InMemoryCache(),
});
let coursesArr: [];
await client
  .query({
    query: gql`query Courses {
      getSupport{
        data{
          attributes{
            Courses{
              courses{
                data{
                  attributes{
                    CourseName
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }`,
  })
  .then((result) => { coursesArr = result.data.getSupport.data.attributes.Courses.courses.data });
  // .then((result) => { console.log(result.data.getSupport.data.attributes.Courses.courses) });

  // console.log(coursesArr)

export default function CoursesSection() {
  return (
    <div className="bg-lightBackground w-full p-10 px-20 flex flex-col gap-8 row-start-2">
    <h2 className="font-teko text-5xl uppercase font-semibold pb-6 text-background">Our Courses</h2>
    <div className="flex flex-wrap justify-between gap-10">
    {coursesArr?.map((course)=>{
                      return( <CourseCard 
                        key={course.attributes.CourseName}
                        courseColor="fill-wellbeing1" 
                        title={course.attributes.CourseName}
                        category="Wellbeing"
                        price="55"
                        slug={course.attributes.slug}
                         />)
                    })}
    </div>
  </div>
  )}