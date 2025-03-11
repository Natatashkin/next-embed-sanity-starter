import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "projectsListBlock",
  title: "Text scroll slider block",
  type: "object",
  fields: [
    defineField({
      name: "active",
      title: "is active?",
      type: "boolean",
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
      name: "items",
      title: "Items",
      type: "array",
      of: [
        defineArrayMember({
          name: "item",
          title: "Item",
          type: "object",
          fields: [
            defineField({
              name: "cover",
              title: "Cover",
              type: "coverType",
            }),
            defineField({
              title: "Has content?",
              name: "hasContent",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
              name: "content",
              title: "Content",
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "description",
                  type: "text",
                }),
                defineField({
                  name: "hasLink",
                  title: "Has link?",
                  type: "linkType",
                }),
              ],
              preview: {
                select: {
                  title: "title",
                },
                prepare(selection) {
                  const { title } = selection;
                  return {
                    title: title ?? "no title",
                  };
                },
              },
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Project list block",
      };
    },
  },
});
