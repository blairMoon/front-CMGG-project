interface Instructor {
  username: string;
  instructorField: null | string;
  instructorAbout: string;
  instructorCareer: string;
}

interface Categories {
  parent: null | {
    name: string;
    classification: string;
    parent: null;
  };
  name: string;
  classification: string;
}

export interface LectureData {
  LectureId: number;
  lectureTitle: string;
  lectureDifficulty: string;
  lectureDescription: string;
  targetAudience: string;
  lectureFee: number;
  thumbnail: string;
  isOpened: boolean;
  grade: null | string;
  instructor: Instructor;
  categories: Categories;
  reviews_num: number;
  rating: number;
}
