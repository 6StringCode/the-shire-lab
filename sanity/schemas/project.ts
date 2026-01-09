import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "partners",
      title: "Partners",
      type: "array",
      of: [{ type: "string" }],
      description: "Partner institutions or organizations",
    }),
    defineField({
      name: "focusAreas",
      title: "Focus Areas",
      type: "array",
      of: [{ type: "string" }],
      description: "Research focus areas or tags",
    }),
    defineField({
      name: "isActive",
      title: "Active Project",
      type: "boolean",
      initialValue: true,
      description: "Uncheck for completed/past projects",
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
      title: "title",
      isActive: "isActive",
    },
    prepare({ title, isActive }) {
      return {
        title,
        subtitle: isActive ? "Active" : "Past Project",
      };
    },
  },
});
