import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "heroSliderBlock",
  title: "Hero slider block",
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
              hidden: ({ parent }) => !parent || !parent.hasContent,
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
                  type: "boolean",
                }),
                defineField({
                  name: "link",
                  title: "Link",
                  type: "linkType",
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: "content.title",
              media: "cover.desktop.image",
            },
            prepare(selection) {
              const { title, media } = selection;
              return {
                title: title ?? "no title",
                media,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Hero slider block",
      };
    },
  },
});
