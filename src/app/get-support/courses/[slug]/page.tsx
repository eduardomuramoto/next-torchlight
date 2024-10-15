"use client"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
// import CourseCard from "../Cards/courseCard";

const client = new ApolloClient({
  uri: `${process.env.CMS_GRAPHQL}`,
  cache: new InMemoryCache(),
});

const COURSE_QUERY = gql`query Courses {
    courses(filters: {slug: {eq:"skills4life"}}) {
      data {
        id
        attributes {
          CourseName
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
        console.log("Result",result)
        setCourse(result.data.courses.data[0].attributes)
        setLoading(false)
      })
      console.log("slug",params.slug,course)
    }, [params.slug,course])
   
    if (isLoading) return <p>Loading...</p>
    // if (!course) return <p>No course data</p>
    
  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="bg-extraLightForeground w-full p-10 px-20 flex flex-col gap-8 row-start-2">
        <h1>{course?.CourseName}</h1>
        </div>
      </main>
      
    </div>
  );
}
