import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "animatedMapBlock",
  title: "Animated map block",
  type: "object",
  fields: [
    defineField({
      name: "active",
      title: "is active?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "richTextType",
    }),
    defineField({
      name: "cover",
      title: "Cover",
      type: "coverType",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Animated map block",
      };
    },
  },
});
