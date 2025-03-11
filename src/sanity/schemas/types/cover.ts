import { defineType, defineField } from "sanity";
// https://www.sanity.io/docs/custom-asset-sources

export default defineType({
  name: "coverType",
  title: "Cover",
  type: "object",
  fields: [
    defineField({
      name: "desktop",
      title: "Desktop",
      type: "object",
      fields: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
        }),
        defineField({
          name: "isCredits",
          title: "Show credits?",
          type: "boolean",
          initialValue: true,
        }),
        defineField({
          name: "source",
          title: "Source reference",
          type: "text",
          hidden: ({ parent }) => !parent || !parent.isCredits,
        }),
      ],
    }),
    defineField({
      name: "mobile",
      title: "Mobile",
      type: "object",
      fields: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
        }),
        defineField({
          name: "isCredits",
          title: "Show credits?",
          type: "boolean",
          initialValue: true,
        }),
        defineField({
          name: "source",
          title: "Source reference",
          type: "text",
          hidden: ({ parent }) => !parent || !parent.isCredits,
        }),
      ],
    }),
    defineField({
      name: "alt",
      title: "Alt",
      type: "string",
    }),
  ],
});
