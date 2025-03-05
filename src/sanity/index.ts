import { announcementSchema } from "./anouncement";
import category from "./category";
import courseContent from "./courseContent";
import coursedata from "./coursedata";
import { heroContentSchema } from "./Homecontent";
import post from "./post";


export const schemaTypes = [
  post,
  category,
  announcementSchema,
  heroContentSchema,
  coursedata,
  courseContent
  // ...other schemas you already have
]