import { RelatedCourse } from "@/interfaces/course.interface";
import CourseCard from "../Cards/courseCard";


export default function OtherCoursesSection({ otherCourses }: { otherCourses: RelatedCourse[] }) {
  return (
    <div className="bg-lightBackground w-full p-10 sm:px-20 flex flex-col gap-8 row-start-2">
      <h2 className="font-teko text-5xl uppercase font-semibold pb-6 text-background">Our Other Courses</h2>
      <div className="flex flex-wrap justify-between gap-10">
        {otherCourses?.map((course) => {
          return (<CourseCard
            key={course.CourseName}
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