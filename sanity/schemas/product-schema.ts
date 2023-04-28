import { defineField, defineType } from "sanity";

const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
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
      validation: (Rule) => Rule.max(50),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
    }),
    defineField({
      name: "rating",
      type: "number",
      title: "Enter a Rating from (1-5 Stars)",
      validation: (Rule) =>
        Rule.min(1).max(5).error("Please enter a Value between 1 and 5"),
    }),
    defineField({
      name: "reviews",
      title: "Number of Customer Reviews",
      type: "number",
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "reference",
      to: [{ type: "brands" }],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "categories" }],
    }),
    defineField({
      name: "colours",
      type: "array",
      title: "Colours",
      of: [{ type: "reference", to: [{ type: "colour" }] }],
    }),
    defineField({
      name: "priority",
      title: "Priority Number",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default product;
