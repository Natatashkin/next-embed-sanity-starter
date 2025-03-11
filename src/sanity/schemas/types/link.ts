import { defineType, defineField } from "sanity";

export default defineType({
  name: "linkType",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "href",
      title: "href",
      type: "string",
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "isExternal",
      title: "Is link external",
      type: "boolean",
    }),
  ],
});
