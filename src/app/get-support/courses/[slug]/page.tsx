"use client"
import CourseBookingCard from "@/components/Cards/courseBookingCard";
import IconCard from "@/components/Cards/iconCard";
import FacilitatorsSection from "@/components/Sections/facilitatorsSection";
import OtherCoursesSection from "@/components/Sections/otherCoursesSection";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { Course, RelatedCourse } from "@/interfaces/course.interface";
import Loading from "@/components/loading";
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
          slug
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
}`;



export default function CoursePage() {
  const params = useParams();
  // console.log(params);
  const [course, setCourse] = useState<Course>()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if (!client) return;
    client
      .query({
        query: COURSE_QUERY,
        variables: {
          slug: params.slug,
        }
      })
      .then((result) => {
        setCourse(result.data.courses.data[0].attributes)
        // console.log("Result", course?.courses.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Apollo Client Error:", error);
      });
  }, [params.slug, course])

  if (isLoading) return <Loading />
  if (!course) return <Loading />


  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="relative w-full">
          <div className="bg-lightBackground w-full p-10 sm:px-20 flex flex-col gap-8 row-start-2">
            <div className="lg:w-2/3">
              <p>{"#" + course.courseCode.replace("_", "-")}</p>
              <h1 className="text-2xl pb-6 font-semibold text-background" >{course.CourseName}</h1>
              {/* <h1 className="text-2xl pb-6 font-semibold text-background" >Skills4life: Domestic Violence Prevention & Awareness Training Course</h1> */}
              <h2 className="font-teko text-5xl uppercase font-semibold pb-6 text-background">What You’ll learn</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-start gap-10">
                {course.courseObjectives.map((objective) => {
                  return <IconCard
                    key={objective.Icon}
                    icon={objective.Icon}
                    objective={objective.Objective} />
                })}
              </div>
            </div>
          </div>
          <FacilitatorsSection facilitatorsArr={course.facilitators.data} />
          <CourseBookingCard
            key={course.CourseName}
            courseColor={"fill-" + course.courseCode.toLowerCase().replace("_0", "")}
            title={course.CourseName}
            category={course.courseCode.replace("_", "-")}
            location={course.Location}
            price={course.Price}
            slug={course.slug}
            duration={course.courseDuration}
          />
        </div>
        <OtherCoursesSection otherCourses={course.courses.data.map((item: { attributes: RelatedCourse }) => item.attributes)} />
      </main>

    </div>
  );
}
