import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import CourseCard from "../Cards/courseCard";

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_CMS_GRAPHQL}`,
  cache: new InMemoryCache(),
});
let coursesArr: any[];
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
                    courseCode
                    Location
                    Price
                    slug
                      courseDuration{
                      __typename
                      ...on ComponentCourseComponentsDuration{
                        unit
                        value
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,
  })
  .then((result) => { coursesArr = result.data.getSupport.data.attributes.Courses.courses.data })
  // .then((result) => { console.log(result.errors) });

  // console.log(coursesArr)
// 
export default function CoursesSection() {
  return (
    <div className="bg-lightBackground w-full p-10 px-20 flex flex-col gap-8 row-start-2" id="courses">
    <h2 className="font-teko text-5xl uppercase font-semibold pb-6 text-background">Our Courses</h2>
    <div className="flex flex-wrap justify-between gap-10">
    {coursesArr?.map((course)=>{
                      return( <CourseCard 
                        key={course.attributes.CourseName}
                        // courseColor={"fill-background" } 
                        courseColor={"fill-" + course.attributes.courseCode.toLowerCase().replace("_0","") } 
                        title={course.attributes.CourseName}
                        category={course.attributes.courseCode.replace("_","-")}
                        location={course.attributes.Location}
                        price={course.attributes.Price}
                        slug={course.attributes.slug}
                        duration={course.attributes.courseDuration}
                         />)
                    })}
    </div>
  </div>
  )}