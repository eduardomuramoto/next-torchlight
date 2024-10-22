"use client"
import CourseBookingCard from "@/components/Cards/courseBookingCard";
import ObjectiveCard from "@/components/Cards/objectiveCard";
import FacilitatorsSection from "@/components/Sections/facilitatorsSection";
import OtherCoursesSection from "@/components/Sections/otherCoursesSection";
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

interface Course {
  CourseName: string,
  courseCode: string,
  Price: string,
  slug:string,
  Location: string[],
  courseDuration: any[],
  courseObjectives: any[],
  facilitators: {
    data: [{
      attributes: {
        Name:string,
        Description:string,
      }
    }],
  },
  courses:{
    data: any[],
  }
 }
 


export default function BookingCoursePage() {
  const params = useParams();
  // console.log(params);
  const [course, setCourse] = useState<Course>()
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
    }, [params.slug,course])
   
    if (isLoading) return <p>Loading...</p>
    if (!course) return <p>No course data</p>

    
  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="relative w-full">
          <div className="bg-lightBackground w-full p-10 px-20 flex flex-col gap-8 row-start-2">
            <div className="w-2/3">
                <p>{"#"+course.courseCode.replace("_","-")}</p>
              <h1 className="text-2xl pb-6 font-semibold text-background" >Booking</h1>
              <h1 className="text-2xl pb-6 font-semibold text-background" >{course.CourseName}</h1>
              {/* <h1 className="text-2xl pb-6 font-semibold text-background" >Skills4life: Domestic Violence Prevention & Awareness Training Course</h1> */}
              <h2 className="font-teko text-5xl uppercase font-semibold pb-6 text-background">What You’ll learn</h2>
              <div className="flex flex-wrap justify-start gap-10">
                {course.courseObjectives.map((objective)=>{ 
                  return <ObjectiveCard 
                  icon={objective.Icon} 
                  objective={objective.Objective}/>
                })}
            </div>
          </div>
        </div>
        <FacilitatorsSection facilitatorsArr={course.facilitators.data} />
        <CourseBookingCard 
                        key={course.CourseName}
                        courseColor={"fill-" + course.courseCode.toLowerCase().replace("_0","") } 
                        title={course.CourseName}
                        category={course.courseCode.replace("_","-")}
                        location={course.Location}
                        price={course.Price}
                        slug={course.slug}
                        duration={course.courseDuration}
                         />
        </div>
        <OtherCoursesSection coursesArr={course.courses.data} />
      </main>
      
    </div>
  );
}
