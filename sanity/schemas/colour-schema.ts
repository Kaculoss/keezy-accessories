import { defineField, defineType } from "sanity";

const colour = defineType({
  name: "colour",
  title: "Colour",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Colour Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hash",
      type: "string",
      title: "Hash Colour Code",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default colour;
