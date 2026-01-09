import { defineField, defineType } from "sanity";

export default defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "degree",
      title: "Degree / Program",
      type: "string",
      description: "e.g., Ph.D., M.P.H. or B.S. Global Health Studies, UM '27",
    }),
    defineField({
      name: "description",
      title: "Bio",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "isCurrent",
      title: "Current Team Member",
      type: "boolean",
      initialValue: true,
      description: "Uncheck for alumni",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
      isCurrent: "isCurrent",
    },
    prepare({ title, subtitle, media, isCurrent }) {
      return {
        title,
        subtitle: `${subtitle}${isCurrent ? "" : " (Alumni)"}`,
        media,
      };
    },
  },
});
