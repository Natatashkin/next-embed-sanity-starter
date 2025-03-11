import { defineType, defineField } from "sanity";

export default defineType({
  name: "buttonType",
  title: "Button",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "isExternal",
      title: "Is link external",
      type: "string",
    }),
    defineField({
      name: "showIcon",
      title: "Show icon?",
      type: "boolean",
    }),
  ],
});
