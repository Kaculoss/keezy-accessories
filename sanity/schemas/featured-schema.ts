import { defineField, defineType } from "sanity";

const featured = defineType({
  name: "featured",
  title: "Featured Products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Featured Category name",
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
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "products",
      type: "array",
      title: "Products",
      of: [{ type: "reference", to: [{ type: "product" }] }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "priority",
      title: "Priority Number",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default featured;
