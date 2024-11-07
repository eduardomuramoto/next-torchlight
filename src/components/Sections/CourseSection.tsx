"use client"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import CourseCard from "../Cards/courseCard";
import { Course } from "@/interfaces/course.interface";
import { useEffect, useState } from "react";

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_CMS_GRAPHQL}`,
  cache: new InMemoryCache(),
  credentials: 'include'
});

export default function CoursesSection() {
  const [coursesArr, setCoursesArr] = useState<Course[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        if (!client) return;
        const result = await client.query({
          query: gql`
            query Courses {
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
      }
          `,
        });
        setCoursesArr(result.data.getSupport.data.attributes.Courses.courses.data.map((item: { attributes: Course }) => item.attributes))
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  // console.log(coursesArr)
  return (
    <div className="bg-lightBackground w-full p-10 px-6 sm:px-20 flex flex-col gap-8 row-start-2" id="courses">
      <h2 className="font-teko text-5xl uppercase font-semibold pb-6 text-background">Our Courses</h2>
      <div className="flex flex-wrap justify-between gap-10">
        {coursesArr?.map((course) => {
          return (<CourseCard
            key={course.CourseName}
            // courseColor={"fill-background" } 
            courseColor={"fill-" + course.courseCode.toLowerCase().replace("_0", "")}
            title={course.CourseName}
            category={course.courseCode.replace("_", "-")}
            location={course.Location}
            price={course.Price}
            slug={course.slug}
            duration={course.courseDuration}
          />)
        })}
      </div>
    </div>
  )
}