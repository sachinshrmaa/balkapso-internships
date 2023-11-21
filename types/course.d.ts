import { type } from "os";

export type CourseData = {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  offerPrice: number;
  registration_link: string;
  thumbnail: string;
};
