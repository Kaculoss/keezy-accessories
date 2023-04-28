import { defineField, defineType } from "sanity";

const brand = defineType({
  name: "brands",
  title: "Brands",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Brand name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 90 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Brand Image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "priority",
      title: "Priority Number",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    }),
  ],
});

export default brand;
