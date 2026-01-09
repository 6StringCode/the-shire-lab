import { groq } from "next-sanity";

export const newsQuery = groq`
  *[_type == "news"] | order(date desc) {
    _id,
    title,
    date,
    description,
    link
  }
`;

export const peopleQuery = groq`
  *[_type == "person" && isCurrent == true] | order(order asc) {
    _id,
    name,
    role,
    degree,
    description,
    email,
    image,
    isCurrent
  }
`;

export const alumniQuery = groq`
  *[_type == "person" && isCurrent == false] | order(order asc, name asc) {
    _id,
    name,
    role,
    degree,
    isCurrent
  }
`;

export const projectsQuery = groq`
  *[_type == "project"] | order(isActive desc, order asc) {
    _id,
    title,
    description,
    partners,
    focusAreas,
    isActive
  }
`;
