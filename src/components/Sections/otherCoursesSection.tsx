import CourseCard from "../Cards/courseCard";


export default function OtherCoursesSection({coursesArr}:{coursesArr:any[]}) {
  return (
    <div className="bg-lightBackground w-full p-10 px-20 flex flex-col gap-8 row-start-2">
    <h2 className="font-teko text-5xl uppercase font-semibold pb-6 text-background">Our Other Courses</h2>
    <div className="flex flex-wrap justify-between gap-10">
    {coursesArr?.map((course)=>{
                      return( <CourseCard 
                        key={course.attributes.CourseName}
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