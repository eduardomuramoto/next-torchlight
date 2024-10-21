"use client"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
// import CourseCard from "../Cards/courseCard";

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_CMS_GRAPHQL}`,
  cache: new InMemoryCache(),
});

const COURSE_QUERY = gql`query Course($slug: String!) {
    courses(filters: {slug: {eq:$slug}}) {
      data {
        id
        attributes {
          CourseName
          courseCode
          Price
          Location
          courseDuration{
                      ...on ComponentCourseComponentsDuration{
                        unit
                        value
                      }
                    }
          courseObjectives{
                      __typename
                      ...on ComponentCourseComponentsCourseObjective{
                        Icon
                        Objective
                      }
            
                    }
          facilitators{
            data{
              attributes{
                Name
                Description
              }
            }
            }
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
}`;



export default function CoursePage() {
  const params = useParams();
  // console.log(params);
  const [course, setCourse] = useState(null)
  const [isLoading, setLoading] = useState(false)
   
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
        setCourse(result.data.courses.data[0].attributes)
        setLoading(false)
      })
      console.log("slug",params.slug,course)
    }, [params.slug,course])
   
    if (isLoading) return <p>Loading...</p>
    if (!course) return <p>No course data</p>
    
  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="bg-lightBackground w-full p-10 px-20 flex flex-col gap-8 row-start-2">
        <h1 className="text-2xl pb-6 font-semibold text-background" >{course.CourseName}</h1>
        {/* <h1 className="text-2xl pb-6 font-semibold text-background" >Skills4life: Domestic Violence Prevention & Awareness Training Course</h1> */}
        <h2 className="font-teko text-5xl uppercase font-semibold pb-6 text-background">What You’ll learn</h2>
        </div>
        <div className="bg-extraLightForeground w-full p-10 px-20 flex flex-col gap-8 row-start-2">
        <h2 className="font-teko text-5xl uppercase font-semibold pb-6 text-background">Our Facilitators</h2>
        </div>
        <div className="bg-lightBackground w-full p-10 px-20 flex flex-col gap-8 row-start-2">
        <h2 className="font-teko text-5xl uppercase font-semibold pb-6 text-background">Our Other Courses</h2>
        </div>
      </main>
      
    </div>
  );
}
