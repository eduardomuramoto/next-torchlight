
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import CourseCard from "../Cards/courseCard";

const client = new ApolloClient({
  uri: `${process.env.CMS_GRAPHQL}`,
  cache: new InMemoryCache(),
});
let course: {};
client
  .query({
    query: gql`query Courses {
      courses(filters: {slug: {eq:"skills4life"}}) {
        data {
          id
          attributes {
            CourseName
          }
        }
      }
    }`,
  })
  .then((result) => { course = result.data.courses.data[0].attributes });
  // .then((result) => { console.log(result.data.courses.data[0].attributes) });



export default function CoursePage() {
 
  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="bg-extraLightForeground w-full p-10 px-20 flex flex-col gap-8 row-start-2">
        <h1>{course.CourseName}</h1>
        </div>
      </main>
      
    </div>
  );
}
