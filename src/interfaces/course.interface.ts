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
  Location: string;
  Price: number;
  slug: string;
  courseDuration?: CourseDuration;
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
    data: {
      attributes: RelatedCourse;
    }[];
  };
}

export interface CourseData {
  id: string;
  attributes: CourseAttributes;
}

export interface CourseQueryResponse {
  courses: {
    data: CourseData[];
  };
}
