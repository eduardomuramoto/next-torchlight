export interface CourseDuration {
  unit: string;
  value: number;
}

export interface CourseObjective {
  __typename: string;
  Icon: string;
  Objective: string;
}

export interface Facilitator {
  Name: string;
  Description: string;
}

export interface RelatedCourse {
  CourseName: string;
  courseCode: string;
  Location: string[];
  Price: string;
  slug: string;
  courseDuration: CourseDuration;
}

export interface RelatedCourseAtt {
  attributes: RelatedCourse
}

export interface Course {
  CourseName: string;
  courseCode: string;
  Price: string;
  Location: string[];
  slug: string;
  courseDuration: CourseDuration;
  courseObjectives: CourseObjective[];
  facilitators: {
    data: {
      attributes: Facilitator;
    }[];
  };
  courses: {
    data: RelatedCourseAtt[]
  };
}

export interface CourseData {
  id: string;
  attributes: Course;
}

export interface CourseQueryResponse {
  courses: {
    data: CourseData[];
  };
}
