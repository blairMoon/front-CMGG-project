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
  instructor: {
    username: string;
    instructorField: null | string;
    instructorAbout: string;
    instructorCareer: string;
  };
  categories: {
    parent: null | {
      name: string;
      classification: string;
      parent: null;
    };
    name: string;
    classification: string;
  };
  reviews_num: number;
  rating: number;
}
